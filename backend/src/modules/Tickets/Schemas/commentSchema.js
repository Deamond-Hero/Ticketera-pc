import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    ticket: [{ type: Schema.Types.ObjectId, ref: "Tickets", default: [] }],
    text: { type: String, required: true },
    user: [{ type: Schema.Types.ObjectId, ref: "Users", default: [] }],
  },
  {
    timestamps: true,
  }
);

const Comment = model("Comments", commentSchema);

export default Comment;
