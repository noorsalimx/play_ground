const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { MONGODB_URI, DB_NAME } = require("./constant");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: DB_NAME,
};

console.log("Connecting...");
/* mongoose.connect() returns a Promise */
mongoose.connect(MONGODB_URI, options, (err) => {
  if (err) {
    console.error("⚠️! Unable to connect to db...", err.message);
    throw new Error(err);
  }
  console.log("Connected to db...");
});

/* //Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:')); */

const courseSchema = new Schema({
  name: String,
  topics: [String],
  isAvailable: Boolean,
  created: { type: Date, default: Date.now() },
  updated: { type: Date, default: Date.now() },
});
const Course = mongoose.model("Course", courseSchema);

const course = new Course({
  name: "Node.js Course",
  topics: ["node.js", "node", "backend"],
  isAvailable: true,
});

course.save((err, res) => {
  if (err) throw new Error(err);
  console.log("Document saved!");
  console.log("Response :", res);
  process.exit(0);
});

/* Close connection */
/* mongoose.connection.close((err) => {
  if (err) console.log(err);
  console.log("Connection closed");
  process.exit(0);
});
 */
