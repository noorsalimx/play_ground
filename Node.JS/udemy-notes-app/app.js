const { green, red } = require("chalk");
const validator = require("validator");
const utils = require("./utils");

const res = validator.isEmail("abc@abc.com");

if (res) console.log(green(res));
else console.log(red.bold(res));
