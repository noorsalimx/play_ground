/**
 * dir/file: Model/user.js
 * @author: (c) Noor Salim
 * created_at: 2021-11-06T23:48:30
 */
const jwt = require('jsonwebtoken');
const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    number: {
      type: String,
      required: true,
    },
  },
  { collection: 'USER', timestamps: true }
);

userSchema.methods.generateToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      number: this.number,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: '7d' }
  );
  return token;
};

const User = model('User', userSchema);
module.exports = User;
