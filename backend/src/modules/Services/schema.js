import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const serviceSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    agent: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
  },
  { timestamps: true }
);

const Service = model("Service", serviceSchema);

export default Service;
