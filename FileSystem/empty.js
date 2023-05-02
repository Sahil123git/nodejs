const eventE = require("events");
const eventEmitter = new eventE();

eventEmitter.on("TempConversion", (value) => {
  console.log("TempConversion");
  C = (((value - 32) * 5) / 9).toFixed(2);
  console.log(C);
});
eventEmitter.emit("TempConversion", 22.5);
