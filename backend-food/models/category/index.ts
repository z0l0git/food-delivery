import { model, Schema, Model, models } from "mongoose";

export type CategoryModelType = {
  _id: Schema.Types.ObjectId;
  name: string;
  foodId: Schema.Types.ObjectId;
};

const CategorySchema = new Schema<CategoryModelType>({
  name: {
    type: String,
    required: true,
  },

  foodId: {
    type: Schema.Types.ObjectId,
    ref: "Food",
    required: true,
  },
});

const CategoryModel: Model<CategoryModelType> =
  models["Category"] || model("Category", CategorySchema);

export default CategoryModel;
