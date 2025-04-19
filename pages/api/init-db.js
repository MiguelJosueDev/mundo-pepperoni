import dbConnect from "../../utilities/mongo";
import Product from "../../models/Product";
import Order from "../../models/Order";

export default async function handler(req, res) {
  try {
    console.log("Conectando a MongoDB...");
    await dbConnect();
    console.log("Conexión exitosa!");

    // Verifica si ya existen datos de ejemplo
    const productCount = await Product.countDocuments();
    const orderCount = await Order.countDocuments();

    // Si no hay productos, crea algunos de ejemplo
    if (productCount === 0) {
      console.log("Creando productos de ejemplo...");
      
      const productosEjemplo = [
        {
          title: "Pizza Pepperoni",
          desc: "Una clásica pizza con pepperoni y queso mozarella",
          img: "/img/pizza.png",
          prices: [12, 15, 20],
        },
        {
          title: "Pizza Vegetariana",
          desc: "Pizza con tomate, pimientos, cebolla y aceitunas",
          img: "/img/pizza.png",
          prices: [10, 13, 18],
        }
      ];

      await Product.insertMany(productosEjemplo);
      console.log(`${productosEjemplo.length} productos creados!`);
    } else {
      console.log(`Ya existen ${productCount} productos en la base de datos.`);
    }

    res.status(200).json({ 
      success: true, 
      message: "Base de datos inicializada correctamente",
      productCount,
      orderCount
    });
  } catch (err) {
    console.error("Error al inicializar la base de datos:", err.message);
    res.status(500).json({ 
      success: false, 
      error: err.message 
    });
  }
} 