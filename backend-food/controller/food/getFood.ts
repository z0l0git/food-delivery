import { Request, Response } from "express";
import { getFoodsQuery } from "../../queries";

export const getFood = async (req: Request, res: Response) => {
  try {
    const foods = await getFoodsQuery();
    res.status(200).send(foods);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
