const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

const port = 5050;

let date = new Date();

let formattedDate = date.toLocaleTimeString();
app.get("/", function (request, response) {
  response.json({ time: `${formattedDate}`, visitors: 0 });
});

app.listen(port, () => console.log(`running port ${port} 😎`));

console.log(formattedDate);
