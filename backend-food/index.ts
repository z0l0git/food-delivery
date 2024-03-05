import { connectDb } from "./db";
import express from "express";
import cors from "cors";
import userRouter from "./routes/userRouter";

const app = express();

app.use(cors());
app.use(express.json());
connectDb();

app.use(userRouter);

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
