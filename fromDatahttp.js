const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const formData = querystring.parse(body);
      console.log(formData); // log the form data to the console
      // do something with the form data, e.g. store it in a database
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Thank you for your feedback!</h1>");
      res.write(`<h1>${formData.name}</h1>`);
      res.write(`<h1>${formData.number}</h1>`);

      res.end();
    });
  } else if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
      <form method="post">
        <label>Name:</label>
        <input type="text" name="name"><br>
        <label>Enter your number:</label>
        <input type="number" name="number"><br>
        <label>Enter your feedback:</label>
        <textarea name="feedback"></textarea><br>
        <button>Submit</button>
      </form>
    `);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 Not Found</h1>");
    res.end();
  }
});

server.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
