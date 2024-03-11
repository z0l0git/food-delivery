import { Request, Response } from "express";
import { updatePass } from "../../queries/user/updatePass";

export const passUpdate = async (req: Request, res: Response) => {
  try {
    const data = await updatePass(req);
    console.log(data);
    res.send(data);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
