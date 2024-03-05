import { connectDb } from "./db";
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(router);
