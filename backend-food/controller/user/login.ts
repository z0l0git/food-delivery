import { Request, Response } from "express";
import { loginQuery } from "../../queries";
export const login = async (req: Request, res: Response) => {
  try {
    const data = await loginQuery(req);

    res.send(data);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
