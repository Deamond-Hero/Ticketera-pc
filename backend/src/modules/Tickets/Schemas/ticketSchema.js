import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const ticketSchema = new Schema(
  {
    subject: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: [
        "Pendiente",
        "Presupuestado",
        "En cola",
        "En proceso",
        "Finalizado",
        "Cancelado",
        "Retirado",
      ],
      default: "Pendiente",
      required: true,
    },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    agent: { type: Schema.Types.ObjectId, ref: "User", required: true },
    service: [{ type: Schema.Types.ObjectId, ref: "Service", required: true }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment", default: [], required: true }],
  },
  { timestamps: true }
);

const Ticket = model("Ticket", ticketSchema);

export default Ticket;
