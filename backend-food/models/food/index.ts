import { model, Schema, Model, models } from "mongoose";

export type FoodModelType = {
  _id: Schema.Types.ObjectId;
  name: string;
  image: string;
  ingredient: string;
  price: number;
};

const FoodSchema = new Schema<FoodModelType>({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  ingredient: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const FoodModel: Model<FoodModelType> =
  models["Foods"] || model("Foods", FoodSchema);

export default FoodModel;
