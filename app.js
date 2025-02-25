const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Home");
});

app.listen(3000, () => {
  console.log("Server 3000-portda ishga tushdi");
});
