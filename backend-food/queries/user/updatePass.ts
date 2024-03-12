import { Request, Response } from "express";
import { UserModel } from "../../models";
import { passwordHash } from "../../utils";

const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  return user;
};

export const updatePass = async (req: Request) => {
  const { email, password } = req.body;
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return "user not found";
    }
    const hashed = await passwordHash(password);

    const updatePass = await UserModel.updateOne(
      { email: user.email },
      { $set: { password: hashed } }
    );

    return updatePass;
  } catch (error) {
    return "Password Set Unsuccessful";
  }
};
