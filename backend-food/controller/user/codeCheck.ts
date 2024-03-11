import { Request, Response } from "express";
import { checkCode } from "../../queries/user/checkCode";

export const codeCheck = async (req: Request, res: Response) => {
  try {
    const data = await checkCode(req);
    res.send(data);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
};
