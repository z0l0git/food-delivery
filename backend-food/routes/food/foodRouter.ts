import express from "express";
import { createFood, getFood } from "../../controller";

const foodRouter = express.Router();

foodRouter.get("/foods", getFood);
foodRouter.post("/food/create", createFood);

export default foodRouter;
