import { Request, Response } from "express";

export const createOrderController = async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
