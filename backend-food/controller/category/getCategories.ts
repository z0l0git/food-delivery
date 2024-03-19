import { Request, Response } from "express";
import { getCategoriesQ } from "../../queries/category/getCategoriesQ";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await getCategoriesQ();
    res.status(200).send(categories);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
