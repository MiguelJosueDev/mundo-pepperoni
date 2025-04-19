import dbConnect from "../../../utilities/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
    const { method, cookies } = req;
  
    try {
      console.log("Connecting to MongoDB...");
      await dbConnect();
      console.log("MongoDB connection successful!");
    
      if (method === "GET") {
        try {
          const products = await Product.find();
          res.status(200).json(products);
        } catch (err) {
          console.error("Error in GET products:", err);
          res.status(500).json({ error: err.message });
        }
      }
    
      if (method === "POST") {
        try {
          const product = await Product.create(req.body);
          res.status(201).json(product);
        } catch (err) {
          console.error("Error in POST product:", err);
          res.status(500).json({ error: err.message });
        }
      }
    } catch (err) {
      console.error("MongoDB connection error:", err);
      res.status(500).json({ error: "Database connection error: " + err.message });
    }
  }