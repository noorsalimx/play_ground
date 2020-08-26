const mongoose = require("mongoose");
const _const = require("./constant");
const MONGODB_URI = process.env.MONGODB_URI || _const.MONGODB_URI || "mongodb://localhost/DB_NAME";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
/* mongoose.connect() returns a Promise */
mongoose.connect(MONGODB_URI, options, (err) => {
  if (err) {
    console.error("Unable to connect to db...", err.message);
    throw new Error(err);
  }
  console.log("Successfully connected to db...");
});

/* //Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:')); */
