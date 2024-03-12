import jwt from "jsonwebtoken";
import { UserModel } from "../../models";
import { Request, Response } from "express";

// Get LoggedIn User
export const getLoggedInUser = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) throw new Error("Not logged in");

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");

    // const getUserById = async (id: string) => {
    //   const user = await UserModel.findOne({ _id: decoded?._id });
    //   return user;
    // };

    // const user = await getUserById(decoded?._id);

    // if (!user) throw new Error("User not found");

    // return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
