const express = require("express");
const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, resp) => {
  resp.send(`
    <form method="post" action="/">
        <label for="name">Name</label>
        <input type="text" name="name" id="name">
        <br>
        <br>
        <label for="contact">Contact</label>
        <input type="text" name="contact" id="contact">
        <br>
        <br>
        <label></label>Feedback</label>
        <textarea name="textAr"></textarea>
        <br>
        <br>
        <button type="submit">Submit</button>
    </form>
    `);
  resp.end();
});

app.post("/", (req, resp) => {
  console.log(req);
  const name = req.body.name;
  const contact = req.body.contact;
  const textAr = req.body.textAr;

  
  resp.json({
    resp: "true",
    name: name,
    contact: contact,
    textAr: textAr,
  });
  resp.end();
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});
