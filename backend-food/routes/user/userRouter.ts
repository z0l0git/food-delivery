import express from "express";
import { createUserController, login } from "../../controller";
import { tokenSend } from "../../controller/user/tokenSend";
import { codeCheck } from "../../controller/user/codeCheck";
import { passUpdate } from "../../controller/user/passUpdate";
import { getRefreshTokenService } from "../../controller/user/refresh";
import { userUpdate } from "../../controller/user/userUpdate";

const userRouter = express.Router();

userRouter.post("/user/signup", createUserController);
userRouter.post("/user/login", login);
userRouter.post("/user/reset", tokenSend);
userRouter.post("/user/checkotp", codeCheck);
userRouter.post("/user/password", passUpdate);
userRouter.get("/users/refresh", getRefreshTokenService);
userRouter.post("/users/update", userUpdate);

export default userRouter;
