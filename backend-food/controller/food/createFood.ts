import { Request, Response } from "express";
import { createFoodQuery } from "../../queries";
export const createFood = async (req: Request, res: Response) => {
  try {
    const food = await createFoodQuery(req);
    res.status(200).send(food);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
