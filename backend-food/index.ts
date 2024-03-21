import { connectDb } from "./db";
import express from "express";
import dotenv from "dotenv";

import cors from "cors";
import userRouter from "./routes/user/userRouter";
import foodRouter from "./routes/food/foodRouter";
import categoryRouter from "./routes/category/categoryRouter";
import orderRouter from "./routes/order/orderRouter";

const app = express();

app.use(cors());
app.use(express.json());
connectDb();

dotenv.config();

app.use(userRouter);
app.use(foodRouter);
app.use(categoryRouter);
app.use(orderRouter);

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
