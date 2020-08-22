const express = require("express");
const morgan = require("morgan");
const logger = require("./logger");
const router = require("./routes/Router");

const app = express();

app.use(express.json());
app.use(logger); // custom middleware
if (app.get("env") === "development") {
  app.use(morgan("dev"));
  console.log("Morgan enabled...");
}

app.get("/", (req, res) => {
  const newLocal = "<h2>Type <b style='color:red;'>/api/courses</b> to see course details</h2>";
  res.send(newLocal);
});

app.use("/api", router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is listening to port ${port}`));
