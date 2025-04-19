// Script para probar la conexión a MongoDB Atlas desde Node.js
// Ejecutar con: node test-db.js
require('dotenv').config();
const { MongoClient } = require('mongodb');

async function main() {
  console.log('Probando conexión a MongoDB...');
  console.log('URI configurada:', process.env.MONGODB_URI ? 'Sí' : 'No');
  
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('Error: No se encontró MONGODB_URI en las variables de entorno');
    return;
  }
  
  const client = new MongoClient(uri);
  
  try {
    console.log('Intentando conectar...');
    await client.connect();
    console.log('¡Conexión exitosa a MongoDB Atlas!');
    
    // Listar bases de datos
    const databasesList = await client.db().admin().listDatabases();
    console.log('Bases de datos disponibles:');
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    
  } catch (err) {
    console.error('Error de conexión:', err);
  } finally {
    await client.close();
    console.log('Conexión cerrada');
  }
}

main().catch(console.error); 