/**
 * dir/file: Controllers/user.js
 * @author: (c) Noor Salim
 * created_at: 2021-11-06T23:48:08
 */

const bcrypt = require('bcryptjs');
const _ = require('lodash');
const otpGenerator = require('otp-generator');

const User = require('../Model/user');
const Otp = require('../Model/otp');

module.exports.signUp = async (request, response) => {
  const { number } = request.body;
  const user = await User.findOne({ number: number });
  if (user) return response.status(400).send('User Already Registered');
  const OTP = otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });
  console.log(OTP);
  const otp = new Otp({ number: number, otp: OTP });
  const salt = await bcrypt.genSalt(10);
  otp.otp = await bcrypt.hash(otp.otp, salt);
  await otp.save();
  response.status(200).send('OTP Sent Successfully!');
};

module.exports.verifyOTP = async (request, response) => {
  try {
    const { number, OTP } = request.body;
    const existingOTP = await Otp.find({ number: number });
    if (existingOTP.length === 0) return response.status(400).send('OTP has expired');
    const latestOTP = existingOTP[existingOTP.length - 1];
    const validUser = await bcrypt.compare(OTP, latestOTP.otp);
    if (validUser && latestOTP.number === number) {
      const user = new User(_.pick(request.body, ['number']));
      const token = user.generateToken();
      const data = await user.save();
      await Otp.deleteMany({ number: latestOTP.number });
      response.status(200).send({
        message: 'User Registration Successful',
        token,
        data,
      });
    } else response.status(400).send('Wrong OTP');
  } catch (err) {
    console.error(err);
  }
};
