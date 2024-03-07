import express from "express";
import { createUserController, login } from "../../controller";

const userRouter = express.Router();

userRouter.post("/user/signup", createUserController);
userRouter.post("/user/login", login);

export default userRouter;
