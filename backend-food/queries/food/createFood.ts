import { Request } from "express";
import FoodModel from "../../models/food";

export const createFoodQuery = async (req: Request) => {
  const { name, image, ingredient, price } = req.body;

  try {
    const food = await FoodModel.create({
      name,
      image,
      ingredient,
      price,
    });

    return food;
  } catch (error: any) {
    return "error creating food";
  }
};
