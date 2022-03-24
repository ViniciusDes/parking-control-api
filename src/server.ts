import express from "express";
import "express-async-errors";
import "./database";
import "./shared/container";
import { routes } from "./routes";
import { errorMidleware } from "./middlewares/errors";
const app = express();

app.use(express.json());

app.use(routes);

app.use(errorMidleware);

app.listen(3334, () => console.log("server is running"));
