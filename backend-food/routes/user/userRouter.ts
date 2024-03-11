import express from "express";
import { createUserController, login } from "../../controller";
import { tokenSend } from "../../controller/user/tokenSend";

const userRouter = express.Router();

userRouter.post("/user/signup", createUserController);
userRouter.post("/user/login", login);
userRouter.post("/user/reset", tokenSend);

export default userRouter;
