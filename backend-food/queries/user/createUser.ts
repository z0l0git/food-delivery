import { Request } from "express";
import { UserModel } from "../../models";
import { passwordHash } from "../../utils";

export const createUserQuery = async (req: Request) => {
  try {
    const { name, email, phone, password } = req.body;
    console.log(req.body);

    const asd = await passwordHash(password);

    const user = await UserModel.create({
      name,
      email,
      phone,
      password: asd,
    });
    return user;
  } catch (error: any) {
    console.log(error.message);
  }
};
