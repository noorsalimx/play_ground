const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const morgan = require("morgan");
const logger = require("./logger");
const router = require("./routes/Router");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true })); // initialize body-parser to parse incoming parameters requests to req.body
app.use(cookieParser()); // initialize cookie-parser to allow us access the cookies stored in the browser

app.use(logger); // custom middleware

/* Use logger in specific env */
/* if (app.get("env") === "development") {
  app.use(morgan("short"));
  console.log("Morgan enabled...");
} */

app.get("/", (req, res) => {
  const newLocal = "<h2>Type <b style='color:red;'>/api/courses</b> to see course details</h2>";
  res.send(newLocal);
});

app.use("/api", router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is listening to port ${port}`));
