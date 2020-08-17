const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/user", (req, res) => {
  // Example - http://localhost:3000/user?name=John&city=Sydney
  console.log(`Request for : http://localhost${req.url}`);
  console.log(`Query : ${req.query}`);
  res.send({ Message: `Hello ${req.query.name}`, QueryObject: req.query });
});

app.get("/params/:id/:name", (req, res) => {
  // Example - http://localhost:3000/params/512/John
  console.log(`Request for : http://localhost${req.url}`);
  console.log(`Params : ${req.params}`);
  res.send({ Message: "Hello Params", QueryObject: req.params });
});

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
