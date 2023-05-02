const eventEmitter = require("events");
const myEmitter = new eventEmitter();

myEmitter.on("message", (msg) => {
  console.log("Received message: " + msg);
});

myEmitter.on("Log in", (msg) => {
  console.log("Log in message: " + msg);
});

myEmitter.emit("Log in", "User has logged In");
myEmitter.emit("message", "Hii there");
