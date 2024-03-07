import { createUserQuery } from "../../queries";
import { Request, Response } from "express";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const data = await createUserQuery(req);
    console.log(data);

    res.send(data);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
