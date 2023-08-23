const express = require("express");
const format = require("date-format");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(201).send("<h1>ANUJ GELLO</h1>");
});

app.get("/api/v1/facebook", (req, res) => {
  const Object = {
    username: "AnujPatelFB",
    follows: 200,
    followers: 250,
    date: format.asString("dd-MM-yy hh:mm:ss.SSS", new Date()),
  };

  res.status(200).json(Object);
});

app.get("/api/v1/instagram", (req, res) => {
  const Object = {
    username: "AnujPatelInsta",
    follows: 100,
    followers: 150,
    date: format.asString("dd-MM-yy hh:mm:ss.SSS", new Date()),
  };

  res.status(200).json(Object);
});

app.get("/api/v1/linkedin", (req, res) => {
  const Object = {
    username: "AnujPatelLinkedin",
    follows: 100,
    followers: 50,
    date: format.asString("dd-MM-yy hh:mm:ss.SSS", new Date()),
  };

  res.status(200).json(Object);
});

app.get("/api/v1/:token", (req, res) => {
  console.log(req.params.token);
  res.status(200).json({ param: req.params.token });
});

app.listen(PORT, (req, res) => {
  console.log("Server is Running");
});
