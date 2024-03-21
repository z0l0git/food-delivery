import { model, Schema, Model, models } from "mongoose";

export type OrderModelType = {
  id: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  orderNumber: number;
  foods: [Schema.Types.ObjectId];
  totalPrice: string;
  process: string;
  createdDate: Date;
  address: string;
  notes: string;
};

const OrderSchema = new Schema<OrderModelType>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  orderNumber: {
    type: Number,
    required: true,
  },
  foods: {
    type: [Schema.Types.ObjectId],
    ref: "Foods",
    required: true,
  },
  totalPrice: {
    type: String,
    required: true,
  },
  process: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now,
  },

  address: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: false,
  },
});

export const OrderModel: Model<OrderModelType> =
  models["Orders"] || model("Orders", OrderSchema);
