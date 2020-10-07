const express = require("express");
const json = require("express");

const app = express();

var USERS = [
  { id: 1, username: "Gabriel", password: "123" },
  { id: 2, username: "Prado", password: "123" },
];

var HELLO = [{ msg: "Hello Express" }];

function getHello() {
  return HELLO;
}

function getUsers() {
  return USERS;
}

app.use(json());

app.get("/", function (req, res) {
  res.send(getHello());
});

app.get("/users", function (req, res) {
  res.send(getUsers());
});

app.listen(3333, function () {
  console.log("Hello Express Listen on Port 3333");
});
