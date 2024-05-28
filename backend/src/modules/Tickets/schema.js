import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const ticketSchema = new Schema({
  subject: { type: String, required: true },
  description: String,
  status: { type: String, enum: ["En cola", "En proceso", "Finalizado", "Cancelado", "Retirado"], default: "En cola" },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  agent: { type: Schema.Types.ObjectId, ref: "User" },
  service: { type: Schema.Types.ObjectId, ref: "Service", required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Ticket = model("Ticket", ticketSchema);

export default Ticket;
