// Script para inicializar una base de datos local con datos de muestra
// Ejecutar con: node setup-db.js
require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Definir los esquemas
const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 60, 
  },
  desc: {
    type: String,
    required: true,
    maxlength: 200, 
  },
  img: {
    type: String,
    required: true,
  },
  prices: {
    type: [Number],
    required: true,
  }
}, {timestamps: true});

const OrderSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
    maxlength: 60, 
  },
  address: {
    type: String,
    required: true,
    maxlength: 200, 
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    default: 0,
  },
  method: {
    type: Number,
    default: 0,
  },
}, {timestamps: true});

// Registrar los modelos
const Product = mongoose.model('Product', ProductSchema);
const Order = mongoose.model('Order', OrderSchema);

// Datos de muestra basados en el menú real de Mundo Pepperoni
const sampleProducts = [
  {
    title: "MUNDO PEPPERONI",
    desc: "Pepperoni, pepperoni y mas pepperoni",
    img: "/img/pizza.png",
    prices: [119, 129, 159, 189, 219, 75],
  },
  {
    title: "MARGARITA",
    desc: "Deliciosas rodajas de jitomate fresco, mozzarella y albahaca",
    img: "/img/pizza.png",
    prices: [119, 129, 159, 189, 219, 75],
  },
  {
    title: "HAWAIANA",
    desc: "Cuadros de jamón y piña natural",
    img: "/img/pizza.png",
    prices: [119, 129, 159, 189, 219, 75],
  },
  {
    title: "MEXICANA",
    desc: "Rodajas de chile jalapeño, cebolla y chorizo",
    img: "/img/pizza.png",
    prices: [119, 129, 159, 189, 219, 75],
  },
  {
    title: "MUNDO QUESO",
    desc: "Triple queso mozzarella",
    img: "/img/pizza.png",
    prices: [119, 129, 159, 189, 219, 75],
  },
  {
    title: "TUNA",
    desc: "Atún y queso mozzarella",
    img: "/img/pizza.png",
    prices: [119, 129, 159, 189, 219, 75],
  },
  {
    title: "MEAT LOVERS",
    desc: "Jamón, chorizo y pepperoni",
    img: "/img/pizza.png",
    prices: [119, 129, 159, 189, 219, 75],
  },
  {
    title: "PUB",
    desc: "Jamón, rodajas de jalapeño y cebolla",
    img: "/img/pizza.png",
    prices: [119, 129, 159, 189, 219, 75],
  },
  {
    title: "CHAMPIÑONI",
    desc: "Champiñones y pepperoni",
    img: "/img/pizza.png",
    prices: [119, 129, 159, 189, 219, 75],
  },
  {
    title: "VEGGIE",
    desc: "Pimiento morrón, cebolla y champiñones",
    img: "/img/pizza.png",
    prices: [119, 129, 159, 189, 219, 75],
  },
  // Especialidades
  {
    title: "ARAGÓN (Especialidad)",
    desc: "Chistorra, jamón, chorizo y cebolla",
    img: "/img/pizza.png",
    prices: [159, 169, 199, 229, 259, 99],
  },
  {
    title: "BACON (Especialidad)",
    desc: "Tocino, pepperoni, jamón y morrón",
    img: "/img/pizza.png",
    prices: [159, 169, 199, 229, 259, 99],
  },
  {
    title: "ARGENTINA (Especialidad)",
    desc: "Chorizo argentino, salchicha, morrón y cebolla",
    img: "/img/pizza.png",
    prices: [159, 169, 199, 229, 259, 99],
  },
  {
    title: "BARRIO (Especialidad)",
    desc: "Base de salsa verde habanera, carnitas, cebolla y cilantro",
    img: "/img/pizza.png",
    prices: [159, 169, 199, 229, 259, 99],
  },
  {
    title: "AZTECA (Especialidad)",
    desc: "Champiñones, cebolla, jalapeño y aguacate",
    img: "/img/pizza.png",
    prices: [159, 169, 199, 229, 259, 99],
  },
  {
    title: "DOCK HABEN (Especialidad)",
    desc: "Salchicha, tocino, morrón y brócoli",
    img: "/img/pizza.png",
    prices: [159, 169, 199, 229, 259, 99],
  }
];

// Función principal
async function setupDatabase() {
  try {
    console.log('Conectando a MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pepperoni');
    console.log('Conexión exitosa a MongoDB');

    // Limpiar la base de datos existente
    console.log('Limpiando colecciones existentes...');
    await Product.deleteMany({});
    await Order.deleteMany({});
    console.log('Colecciones limpiadas');

    // Insertar productos de muestra
    console.log('Insertando productos de muestra...');
    const createdProducts = await Product.insertMany(sampleProducts);
    console.log(`${createdProducts.length} productos insertados`);

    // Crear un archivo JSON con los datos
    const exportData = {
      products: createdProducts.map(p => p.toObject())
    };
    fs.writeFileSync(
      path.join(__dirname, 'sample-data.json'), 
      JSON.stringify(exportData, null, 2)
    );
    console.log('Datos exportados a sample-data.json');

    console.log('¡Inicialización de base de datos completada con éxito!');
    console.log('Puedes iniciar la aplicación con: npm run dev');
  } catch (error) {
    console.error('Error durante la inicialización de la base de datos:', error);
  } finally {
    // Cerrar la conexión
    mongoose.connection.close();
    console.log('Conexión a MongoDB cerrada');
  }
}

// Ejecutar la función
setupDatabase();