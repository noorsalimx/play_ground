module.exports = {
  PORT: 3000,
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/",
  DB_OPTIONS: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "DB",
  },
  DB_NAME: "DB",
  DB_PORT: 27017,
};
