module.exports = {
  PORT: 3000,
  MONGODB_URI: process.env.MONGODB_URI || "mongodb+srv://superadmin:NNbdydQZC17FSWRO@cluster0-ypemg.mongodb.net/" || "mongodb://localhost/",
  DB_OPTIONS: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "DEV_DB",
  },
  DB_NAME: "DEV_DB",
  DB_PORT: 27017,
};
