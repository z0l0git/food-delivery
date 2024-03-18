import FoodModel from "../../models/food";
import { Request } from "express";

export const getFoodsQuery = async (req: Request) => {
  const { filter = {} } = req.body;
  const foods = await FoodModel.find(filter);
  return foods;
};
