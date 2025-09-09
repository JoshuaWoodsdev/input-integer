const inputInteger = require("../src/index.js");

const x = inputInteger();

document.body.innerHTML = "<h1>" + x + " </h1>";
//The ${} method did not work
//Something to do with JS versions but this method worked
