function color() {
  console.log("Car color is green");
}

function brand() {
  console.log("Car brand is BMW");
}

function readFile() {
  const fs = require("fs");

  fs.readFile("../colorcode/webcolors.txt", "UTF8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}

module.exports = { color, brand, readFile };
