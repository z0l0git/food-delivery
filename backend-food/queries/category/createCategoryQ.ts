import { Request } from "express";
import CategoryModel from "../../models/category";

export const createCategoryQ = async (req: Request) => {
  const { name, foodIds } = req.body;

  try {
    const category = await CategoryModel.create({
      name,
      foodId: [...foodIds],
    });
    console.log(category);

    return category;
  } catch (error: any) {
    return "Error creating category: " + error.message;
  }
};
