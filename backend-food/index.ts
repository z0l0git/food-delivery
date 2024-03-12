import { connectDb } from "./db";
import express from "express";
import dotenv from "dotenv";

import cors from "cors";
import userRouter from "./routes/user/userRouter";

const app = express();

app.use(cors());
app.use(express.json());
connectDb();

dotenv.config();

app.use(userRouter);

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
