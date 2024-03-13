import { Request, Response } from "express";
import { updateUser } from "../../queries/user/updateUser";

export const userUpdate = async (req: Request, res: Response) => {
  try {
    const data = await updateUser(req);
    console.log(data);
    res.send(data);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
