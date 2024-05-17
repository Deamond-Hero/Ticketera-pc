import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const scheduleSchema = new Schema({
  service: { type: Schema.Types.ObjectId, ref: "Service", required: true },
  date: { type: Date, required: true },
  timeSlot: { type: String, required: true },
  isBooked: { type: Boolean, default: false },
});

const Schedule = model("Schedule", scheduleSchema);

export default Schedule;
