const express = require("express");
const { exec } = require("child_process");

const app = express();

// Practice secret — dummy value only
const API_KEY = "dummy-api-key-12345";

// Vulnerable command execution
app.get("/ping", (req, res) => {
  const host = req.query.host;

  exec(`ping -c 1 ${host}`, (error, stdout) => {
    if (error) {
      return res.status(500).send("Command failed");
    }

    res.send(stdout);
  });
});

app.get("/", (req, res) => {
  res.send("Hello Trivy");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});