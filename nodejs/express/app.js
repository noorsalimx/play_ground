const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const logger = require('./logger');
const router = require('./routes/Router');
const genreRouter = require('./routes/Genres');
const customerRouter = require('./routes/Customers');
const otherRouter = require('./routes/OtherRouter');
const DBConnector = require('./dao/DBConnector');

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true })); // initialize body-parser to parse incoming parameters requests to req.body
app.use(cookieParser()); // initialize cookie-parser to allow us access the cookies stored in the browser

app.use(logger); // custom middleware

app.use('/', router);
app.use('/api/genres', genreRouter);
app.use('/api/customers', customerRouter);
app.use('/api/other', otherRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  // await DBConnector.createConnection();
  console.log(`App is listening to port ${PORT}...`);
});
