import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
const app = express();
dotenv.config();
app.use(express.json());
app.use(morgan("tiny"));
app.use(bodyParser.json());

export default app;
