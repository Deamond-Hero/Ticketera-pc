import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();

const connectMongoose = async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    dbName: "", // queda elegir
  });
};

export async function connectDb() {
  try {
    await connectMongoose();
    console.log("Database connection established");
  } catch (error) {
    console.error(error);
  }
}
