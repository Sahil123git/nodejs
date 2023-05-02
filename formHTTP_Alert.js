const http = require("http");

const server = http.createServer((req, resp) => {
  if (req.url === "/") {
    resp.writeHead(200, { "Content-Type": "text/html" });
    resp.write(`
          <form method="post" action="/result">
            <label>Name:</label>
            <input type="text" name="name"><br>
            <label>Enter your number:</label>
            <input type="number" name="number"><br>
            <label>Enter your feedback:</label>
            <textarea name="feedback"></textarea><br>
            <button>Submit</button>
          </form>
        `);
    resp.end();
  } else if (req.url === "/result") {
    // Parse the query string to get the form data
    resp.writeHead(200, { "Content-Type": "text/html" });
    resp.write(`<h1>Form Submitted</h1>`);
    resp.end();
  } else {
    resp.writeHead(404, { "Content-Type": "text/html" });
    resp.write("<h1>404 Not Found</h1>");
    resp.end();
  }
});

server.listen(4000, () => {
  console.log("server is listening on 4000");
});
