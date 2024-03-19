import { Request, Response } from "express";
import { createCategoryQ } from "../../queries/category/createCategoryQ";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = createCategoryQ(req);
    res.status(200).send(category);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
