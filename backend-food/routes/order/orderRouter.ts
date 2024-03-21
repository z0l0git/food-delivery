import express from "express";
import { createOrderController } from "../../controller/order/createOrderController";

const orderRouter = express.Router();

orderRouter.post("/order/create", createOrderController);

export default orderRouter;
