import { Request, Response } from "express";
import { createOrder } from "../../queries/order/createOrder";

export const createOrderController = async (req: Request, res: Response) => {
  try {
    const order = await createOrder(req);
    res.status(201).send(order);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
