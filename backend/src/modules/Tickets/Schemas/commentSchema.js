import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema({
  ticket: [{ type: Schema.Types.ObjectId, ref: "Tickets", default: [] }],
  text: { type: String, required: true },
  user: [{ type: Schema.Types.ObjectId, ref: "Users", default: [] }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Comment = model("Comments", commentSchema);

export default Comment;
