/**
 * Model
 * File name: otp.js
 * @author: (c) Noor Salim
 */
const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    number: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    createdAt: { type: Date, default: Date.now(), index: { expires: 300 } },
  },
  { collection: 'OTP', timestamps: true }
);

const Otp = model('Otp', userSchema);

module.exports = Otp;
