import jwt, { GetPublicKeyOrSecret, Secret } from "jsonwebtoken";
import { UserModel } from "../../models";
import { Request, Response } from "express";

type DecodedType = {
  _id: string;
  iat: number;
  exp: number;
};

// Get LoggedIn User
export const getLoggedInUser = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      console.log("Not logged in");
      return;
    }

    const secret = process.env.JWT_SECRET as Secret | GetPublicKeyOrSecret;

    const decoded = jwt.verify(token, secret) as unknown;

    const id = decoded as DecodedType;

    // console.log(id._id);

    const getUserById = async (id: any) => {
      const user = await UserModel.findOne({ _id: id });
      return user;
    };

    const user = await getUserById(id?._id);

    if (!user) throw new Error("User not found");

    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
