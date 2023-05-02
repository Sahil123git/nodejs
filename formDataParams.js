const http = require("http");
const url = require("url"); //to use this: url.parse(req.url, true);

const server = http.createServer((req, resp) => {
  if (req.url === "/") {
    resp.writeHead(200, { "Content-Type": "text/html" });
    resp.write(`
          <form method="get" action="/result">
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
  } else if (req.url.startsWith("/result")) {
    // Parse the query string to get the form data
    const { query } = url.parse(req.url, true); // Parse the query string to get the form data
    // The true parameter in the second argument is used to indicate that the query string should be parsed into an object.

    resp.writeHead(200, { "Content-Type": "text/html" });
    console.log(url.parse(req.url, true));
    resp.write(`<h1>Form Submitted</h1>`);
    resp.write(`<p>Name: ${query.name}</p>`);
    resp.write(`<p>Number: ${query.number}</p>`);
    resp.write(`<p>Feedback: ${query.feedback}</p>`);
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
