import express from "express";
import "express-async-errors";
import "./database";
import "./shared/container";
import { routes } from "./routes";
const errorMidleware = require("./middlewares/errors");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();

app.use(bodyParser());
app.use(methodOverride());

app.use(express.json());

app.use(routes);
process.env.TZ = "America/Sao_Paulo";
const nDate = new Date().toLocaleString("pt-BR", {
  timeZone: "America/Sao_Paulo",
});

console.log(nDate);
console.log(new Date());

app.use(errorMidleware);
app.listen(3334, () => console.log("server is running"));
