import { Request, Response } from "express";
import { UserModel } from "../../models";

const getUserById = async (_id: string) => {
  const user = await UserModel.findOne({ _id: _id });
  return user;
};
export const updateUser = async (req: Request) => {
  const { _id, name, phone, email } = req.body;
  try {
    const user = await getUserById(_id);
    if (!user) {
      return "user not found";
    }
    const updateUser = await UserModel.updateOne(
      { _id: user._id },
      { $set: { email: email, name: name, phone: phone } }
    );
    return updateUser;
  } catch (error: any) {
    return "update failed";
  }
};
