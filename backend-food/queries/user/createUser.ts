import { Request } from "express";
import { UserModel } from "../../models";
import { passwordHash } from "../../utils";

export const createUserQuery = async (req: Request) => {
  try {
    const { name, email, phone, password } = req.body;
    console.log(req.body);

    const user = await UserModel.create({
      name,
      email,
      phone,
      password: passwordHash(password),
    });

    return user;
  } catch (error: any) {
    console.log(error.message);
  }
};
