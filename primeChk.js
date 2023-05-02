const http = require("http");
const url = require("url");

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const server = http.createServer((req, resp) => {
  if (req.url === "/") {
    resp.writeHead(200, { "Content-Type": "Text/html" });
    resp.write(`<form method="get" action="/result">
      <label for="num">Enter Number</label>
      <input type="text" name="num" placeholder="12.."><br>
      <button>Submit</button>
    </form>`);
    resp.end();
  } else if (req.url.startsWith("/result")) {
    resp.writeHead(200, { "Content-Type": "Text/HTML " });
    const { query } = url.parse(req.url, true);
    const num = query.num;
    if (isPrime(num)) {
      resp.write("<p>Entered Num is prime</p>");
    } else {
      resp.write("<p>Entered Num is not prime</p>");
    }
    resp.end();
  } else {
    resp.writeHead(404, { "Content-Type": "text/html" });
    resp.write("<h1>404 Not Found</h1>");
    resp.end();
  }
});

server.listen(4000, () => {
  console.log("server is listening on port 40000");
});
