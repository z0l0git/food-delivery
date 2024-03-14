import FoodModel from "../../models/food";

export const getFoodsQuery = async () => {
  const foods = await FoodModel.find();
  return foods;
};
