const port = process.env.PORT || 3000;
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(`Request for : ${req.url}`);
  res.send("Hello");
});
console.log();
app.listen(port, () => {
  console.log(`App listening to port ${port}`);
});
