import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const serviceSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Service = model("Service", serviceSchema);

export default Service;
