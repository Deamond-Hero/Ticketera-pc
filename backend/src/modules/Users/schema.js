import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    role: {
      type: String,
      required: true,
      enum: ["Cliente", "Tecnico", "Administrador"],
      default: "Cliente",
    },
    tickets: [{ type: Schema.Types.ObjectId, ref: "Ticket", default: [], required: true }],
    token: { type: String },
  },
  { timestamps: true },
);

const User = model("User", userSchema);

export default User;
