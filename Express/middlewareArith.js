const express = require("express");
const app = express();

// Middleware to parse request body as JSON
app.use(express.json());

// Middleware to serve static files from the public directory
app.use(express.urlencoded({ extended: true }));

// Middleware to handle arithmetic calculations
let obj = {
  inc: 0,
  dec: 0,
  square: 0,
};

function calculate(req, res, next) {
  let number = parseInt(req.body.number);
  // console.log(req.body);
  const result = {
    increment: number + 1,
    decrement: number - 1,
    square: number ** 2,
  };

  obj = {
    ...obj,
    inc: result.increment,
    dec: result.decrement,
    square: result.square,
  };
  // console.log(obj);

  // console.log(res.locals);
  res.locals.result = result;
  // console.log("------------");
  // console.log(res.locals);
  next();
}

// Route handler for POST request to root ("/")
app.post("/", calculate, (req, res) => {
  console.log(req.body);
  const result = res.locals.result;
  // console.log(obj);
  // const val1 = parseInt(res.body.number);
  // console.log(result.increment);

  res.send(`
    <h1>Results:</h1>
    <p>${result.increment}</p>
    <p>${result.decrement}</p>
    <p>${result.square}</p>
    
  `);
});

// Route handler for GET request to root ("/")
app.get("/", (req, res) => {
  res.send(`
    <form method="POST" action="/">
      <label for="number">Enter a number:</label>
      <input type="number" id="number" name="number">
      <button type="submit">Calculate</button>
    </form>
  `);
});

// Start server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
