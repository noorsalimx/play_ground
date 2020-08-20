function log(req, res, next) {
  const msg = {
    app: "node-app",
    operation: "logging...",
    request: req.url,
  };
  console.log(msg);
  next();
}

module.exports = log;
