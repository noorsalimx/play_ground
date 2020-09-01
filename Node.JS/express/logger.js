function log(req, res, next) {
  console.log("HEADERS :", req.headers);
  next();
}

module.exports = log;
