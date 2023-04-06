const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const moment = require("moment");

const port = process.env.PORT || 5050;

let date = new Date();

let numberOfVisits = 1;

if (numberOfVisits && typeof window !== "undefined") {
  numberOfVisits = Number(numberOfVisits) + 1;
  localStorage.setItem("page_view", numberOfVisits);
} else {
  numberOfVisits = 1;
  localStorage.setItem("page_view", 1);
}

let formattedDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

app.get("/", function (request, response) {
  response.send(formattedDate, numberOfVisits);
});

console.log(formattedDate);
