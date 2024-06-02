import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema({
  ticket: [{ type: Schema.Types.ObjectId, ref: "Ticket", default: [] }],
  text: { type: String, required: true },
  user: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Comment = model("Comment", commentSchema);

export default Comment;
