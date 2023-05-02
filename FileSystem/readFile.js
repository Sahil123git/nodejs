const fs = require("fs");

fs.readFile("./empty.js", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else if (data.trim() === "") {
    console.log("File is empty");
  } else {
    console.log("--------------------");
    console.log(data);
  }
});
try {
  const data = fs.readFileSync("test.js", "utf8");
  if (data.trim() === "") {
    console.log("file is empty");
  } else {
    console.log(data);
  }
} catch (err) {
  console.log(err);
}
