import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  try {
    console.log("Intentando conectar a MongoDB con método alternativo...");
    
    // Usando el driver MongoDB nativo
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    
    await client.connect();
    const dbList = await client.db().admin().listDatabases();
    console.log("Conexión exitosa con método alternativo!");
    
    await client.close();
    
    res.status(200).json({ 
      success: true, 
      message: "Conexión a MongoDB exitosa usando método alternativo",
      databases: dbList.databases.map(db => db.name)
    });
  } catch (err) {
    console.error("Error de conexión a MongoDB:", err.message);
    res.status(500).json({ 
      success: false, 
      error: err.message,
      stack: err.stack
    });
  }
} 