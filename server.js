const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

app.use(cors());

const port = 5050;

const currentDate = new Date();

let options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
};

const currentTime = new Intl.DateTimeFormat("en-us", options).format(
  new Date(currentDate)
);

app.get("/https://ipinfo.io", function (request, response) {
  response.json({
    time: `${currentTime}`,
    visitors: `Not sure how to count visitors 🥲`,
  });
});

app.listen(port, () => console.log(`running port ${port} 😎`));
