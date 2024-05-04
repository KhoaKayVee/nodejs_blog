import { engine } from "express-handlebars";

const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");

// http logger
app.use(morgan("combined"));

// template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.send("123");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
