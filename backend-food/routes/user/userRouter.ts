import express from "express";
import { createUserController } from "../../controller";

const userRouter = express.Router();

userRouter.post("/user/signup", createUserController);

export default userRouter;
