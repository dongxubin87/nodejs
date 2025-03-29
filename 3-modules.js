// modules Encapsulated code, only share the minimum
// CommonJS, every file is module

const { john, peter } = require("./4-name");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");
sayHi("susan");
sayHi(john);
sayHi(peter);
