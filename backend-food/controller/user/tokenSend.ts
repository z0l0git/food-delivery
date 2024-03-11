import { Request, Response } from "express";
import { generateToken } from "../../queries/user/tokenGenerate";

export const tokenSend = async (req: Request, res: Response) => {
  try {
    const data = await generateToken(req);
    res.send(data);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
};
