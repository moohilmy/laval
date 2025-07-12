import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB connected with Mongoose");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
}
