/**
 * dir/file: Routers/user.js
 * @author: (c) Noor Salim
 * created_at: 2021-11-06T23:47:28
 */
const router = require('express').Router();
const userController = require('../Controllers/user');

router.route('/signUp').post(userController.signUp);
router.route('/verifyOtp').post(userController.verifyOTP);

module.exports = router;
