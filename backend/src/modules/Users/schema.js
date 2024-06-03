import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    avatar: { type: String, default: "" },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true, default: "" },
    lastName: { type: String, required: true, default: "" },
    phone: { type: String, required: true, default: "" },
    role: {
      type: String,
      required: true,
      enum: ["Cliente", "Tecnico", "Administrador"],
      default: "Cliente",
    },
    services: [{ type: Schema.Types.ObjectId, ref: "Service", default: [], required: true }],
    tickets: [{ type: Schema.Types.ObjectId, ref: "Ticket", default: [], required: true }],
    token: { type: String },
  },
  { timestamps: true },
);

const User = model("User", userSchema);

export default User;
