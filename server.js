const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const moment = require("moment");
const fs = require("fs");

const port = process.env.PORT || 5050;

let date = new Date();

let formattedDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

app.get("/", function (request, response) {
  response.send(
    `It's ${formattedDate}, thanks for visiting and you are visitor number `
  );
});

app.listen(port, () => console.log(`running port ${port}`));

console.log(formattedDate);
