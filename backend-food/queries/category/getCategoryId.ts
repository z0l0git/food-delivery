import CategoryModel from "../../models/category";
import { Request } from "express";

export const getCategoryId = async (req: Request) => {
  const { id } = req.params;
  try {
    const category = CategoryModel.findById({ _id: id }).populate("foodId");
    return category;
  } catch (error: any) {
    return error.message;
  }
};
