import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const ticketSchema = new Schema({
  subject: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true, enum: ["En cola", "En proceso", "Finalizado", "Cancelado", "Retirado"], default: "En cola" },
  user: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
  firsName: { type: String },
  lastName: { type: String },   
  phone: { type: String },
  agent: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }], 
  service: [{ type: Schema.Types.ObjectId, ref: "Services", default: [] }], 
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Ticket = model("Ticket", ticketSchema);

export default Ticket;
