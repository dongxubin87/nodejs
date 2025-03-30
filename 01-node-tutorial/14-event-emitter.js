const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, age) => {
  console.log(`my name is ${name}, i am ${age}!`);
});
customEmitter.on("response", () => {
  console.log(`some other logic here`);
});

customEmitter.emit("response", "dong", 38);
