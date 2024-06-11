import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    avatar: { type: String, default: " ", required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, default: " ", required: true },
    lastName: { type: String, default: " ", required: true },
    phone: { type: String, default: " ", required: true },
    role: {
      type: String,
      required: true,
      enum: ["Cliente", "Tecnico", "Administrador"],
      default: "Cliente",
    },
    services: [{ type: Schema.Types.ObjectId, ref: "Service", default: [], required: true }],
    tickets: [{ type: Schema.Types.ObjectId, ref: "Ticket", default: [], required: true }],
    emailToken: { type: String },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
