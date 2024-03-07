import { Request, Response } from "express";
import { UserModel } from "../../models";
import { compareHash, tokenGenerate } from "../../utils";

const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  return user;
};

export const loginQuery = async (req: Request) => {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }
    const isPasswordTrue = await compareHash(password, user.password);

    if (!isPasswordTrue) {
      throw new Error("Password or Email Incorrect");
    }
    const token = tokenGenerate(user._id.toString());

    return token;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
