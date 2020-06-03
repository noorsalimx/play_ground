const path = require("path");
const { log } = require("util");
const { getHeapStatistics } = require("v8");

log(getHeapStatistics());
console.log(path.join(__dirname, "www", "files"));
