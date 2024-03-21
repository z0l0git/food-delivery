import { Request } from "express";
import { UserModel } from "../../models";
import { OrderModel } from "../../models/order";
import FoodModel from "../../models/food";
import { ORDER_PROCESS } from "../../consts";

const getFoodPrices = async (foodIds: string[]) => {
  const prices = Promise.all(
    foodIds.map(async (el) => {
      const food = await FoodModel.findById({ _id: el });
      return food?.price;
    })
  );
  return prices;
};

export const createOrder = async (req: Request) => {
  const { userId, foods, address, notes = "" } = req.body;
  const userExists = await UserModel.findOne({ _id: userId });
  if (!userExists) {
    throw new Error("User does not exist");
  }
  const earlyToday = new Date();
  earlyToday.setHours(0, 0, 0, 0);

  const now = new Date();

  const howManyOrders = await OrderModel.countDocuments({
    createdDate: {
      $gte: earlyToday,
      $lt: now,
    },
  });

  const totalPrices = await getFoodPrices(foods);

  const sumOfTotalPrice = totalPrices.reduce(
    (acc: number, current) => acc + Number(current),
    0
  );
  const result = await OrderModel.create({
    userId,
    foods,
    address,
    notes,
    totalPrice: sumOfTotalPrice.toString(),
    orderNumber: howManyOrders + 1,
    process: ORDER_PROCESS.PENDING,
  });
  return result;
};
