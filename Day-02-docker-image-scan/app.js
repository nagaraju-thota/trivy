const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());

app.get("/", (req, res) => {
  res.send("Hello Trivy");
});

app.get("/ping", (req, res) => {
  res.send("Ping endpoint");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});