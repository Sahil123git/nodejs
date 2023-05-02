const fs = require("fs");
//Async
fs.readFile("./test.js", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    fs.unlink("./test.js", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File Deleted");
      }
    });

    fs.writeFile("./empty.js", data, (err) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(data);
        console.log("Data entered successfully");
      }
    });
  }
});

//Using Sync
let data = fs.readFileSync("test.js", "utf8");
// console.log(data);
fs.unlinkSync("./test.js");
fs.writeFileSync("./empty.js", data);
