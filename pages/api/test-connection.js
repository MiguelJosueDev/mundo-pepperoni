import dbConnect from "../../utilities/mongo";

export default async function handler(req, res) {
  try {
    console.log("Intentando conectar a MongoDB...");
    await dbConnect();
    console.log("¡Conexión a MongoDB exitosa!");
    res.status(200).json({ 
      success: true, 
      message: "Conexión a MongoDB exitosa",
      mongodb_uri: process.env.MONGODB_URI ? "URI configurada correctamente" : "URI no configurada" 
    });
  } catch (err) {
    console.error("Error de conexión a MongoDB:", err.message);
    res.status(500).json({ 
      success: false, 
      error: err.message 
    });
  }
} 