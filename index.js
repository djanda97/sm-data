const express = require("express");
const app = express();
const db = require("./db");

console.log(db);

app.get("/", (req, res) => {
  res.send("Hello");
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
