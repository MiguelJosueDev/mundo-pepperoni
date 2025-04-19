import dbConnect from "../../utilities/mongo";

export default async function handler(req, res) {
  try {
    console.log("Testing MongoDB connection...");
    await dbConnect();
    console.log("MongoDB connection successful!");
    res.status(200).json({ message: "MongoDB connection successful!" });
  } catch (err) {
    console.error("MongoDB connection error:", err);
    res.status(500).json({ error: err.message });
  }
} 