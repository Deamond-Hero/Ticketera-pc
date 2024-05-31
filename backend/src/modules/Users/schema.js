import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  role: { type: String, required: true, enum: ["Cliente", "Tecnico", "Administrador"], default: "Cliente" },
  tickets: [{ type: Schema.Types.ObjectId, ref: "Ticket", default: [], required: true }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = model("User", userSchema);

export default User;
