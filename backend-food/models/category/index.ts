import { model, Schema, Model, models } from "mongoose";

export type CategoryModelType = {
  _id: Schema.Types.ObjectId;
  name: string;
  foodId: Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
};

const CategorySchema = new Schema<CategoryModelType>({
  name: {
    type: String,
    required: true,
  },

  foodId: {
    type: [Schema.Types.ObjectId],
    ref: "Foods",

    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const CategoryModel: Model<CategoryModelType> =
  models["Category"] || model("Category", CategorySchema);

export default CategoryModel;
