import mongoose from "mongoose";
// @ts-ignore
import {config} from "./config.js";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("✅ Connected to MongoDB successfully!");
        });

        mongoose.connection.on("error", (err) => {
            console.error("❌ MongoDB connection error:", err);
        });

        mongoose.connection.on("disconnected", () => {
            console.warn("⚠️ MongoDB disconnected");
        });

        await mongoose.connect(config.dbUrl as string, {
            dbName: `${config.dbName}`,
        });
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

export default connectDB;
