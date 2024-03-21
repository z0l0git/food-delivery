import express from "express";

const orderRouter = express.Router();

orderRouter.post("/order/create");

export default orderRouter;
