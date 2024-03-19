import { Request, Response } from "express";
import { getCategoryId } from "../../queries/category/getCategoryId";

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const category = await getCategoryId(req);
    res.status(200).send(category);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
