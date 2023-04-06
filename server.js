const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const moment = require("moment");

const port = process.env.PORT || 5050;

let date = new Date();

let formattedDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

app.get("/", function (request, response) {
  response.send(formattedDate);
});

console.log(formattedDate);
