import express from "express";
import { createCategory } from "../../controller/category/createCategory";
import { getCategories } from "../../controller/category/getCategories";
import { getCategoryById } from "../../controller/category/getCategoryById";

const categoryRouter = express.Router();

categoryRouter.post("/category", createCategory);
categoryRouter.get("/category/getAll", getCategories);
categoryRouter.get("/category/getOne/:id", getCategoryById);

export default categoryRouter;
