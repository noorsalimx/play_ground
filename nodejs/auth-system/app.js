/**
 * dir/file: app.js
 * @author: (c) Noor Salim
 * created_at: 2021-11-06T23:51:22
 */
const express = require('express');
const app = express();
const userRouter = require('./Routers/user');

app.use(express.json());
app.use('/api/user', userRouter);

module.exports = app;
