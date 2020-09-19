const mongoose = require("mongoose");
const { MONGODB_URI, DB_OPTIONS } = require("../constant");

class DBConnector {
  constructor() {}
  static async createConnection() {
    /* mongoose.connect() returns a Promise */
    await mongoose.connect(MONGODB_URI, DB_OPTIONS, (err, client) => {
      if (err) {
        console.error("⚠️! Unable to connect to db...", err.message);
        process.exit(1);
      }
      console.log(`Connected to ${DB_OPTIONS.dbName} db...`);
      console.log();
    });
  }
}

module.exports = DBConnector;
