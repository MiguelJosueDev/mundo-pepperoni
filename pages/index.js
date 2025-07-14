import Head from 'next/head'
import Featured from '../components/Featured'
import Pizzas from '../components/Pizzas'
import styles from '../styles/Home.module.css'

// Datos estáticos de pizzas para desarrollo
const staticPizzas = [
  {
    _id: "1",
    title: "MUNDO PEPPERONI",
    desc: "Pepperoni, pepperoni y mas pepperoni",
    img: "/img/pizza.png",
    prices: [119, 129, 159, 189, 219, 75],
  },
  {
    _id: "2",
    title: "MARGARITA",
    desc: "Deliciosas rodajas de jitomate fresco, mozzarella y albahaca",
    img: "/img/pizza.png",
    prices: [119, 129, 159, 189, 219, 75],
  },
  {
    _id: "3",
    title: "HAWAIANA",
    desc: "Cuadros de jamón y piña natural",
    img: "/img/pizza.png",
    prices: [119, 129, 159, 189, 219, 75],
  },
  {
    _id: "4",
    title: "MEXICANA",
    desc: "Rodajas de chile jalapeño, cebolla y chorizo",
    img: "/img/pizza.png",
    prices: [119, 129, 159, 189, 219, 75],
  },
  {
    _id: "5",
    title: "MUNDO QUESO",
    desc: "Triple queso mozzarella",
    img: "/img/pizza.png",
    prices: [119, 129, 159, 189, 219, 75],
  },
  {
    _id: "6",
    title: "TUNA",
    desc: "Atún y queso mozzarella",
    img: "/img/pizza.png",
    prices: [119, 129, 159, 189, 219, 75],
  }
];

export default function Home({ pizzas, error }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mundo Pepperoni - Las Mejores Pizzas</title>
        <meta name="description" content="Las mejores pizzas artesanales de Tehuacán" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      
      {error ? (
        <div className={styles.error}>
          <h2>Cargando productos...</h2>
          <p>Estamos preparando todo para ti. ¡Vuelve en unos momentos!</p>
        </div>
      ) : (
        <Pizzas pizzas={pizzas || []} />
      )}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  try {
    // Para desarrollo, usar datos estáticos en lugar de MongoDB
    return {
      props: {
        pizzas: staticPizzas,
        error: null
      },
    };
    
    // Código original usando API
    /*
    const protocol = ctx.req.headers['x-forwarded-proto'] || 'http';
    const host = ctx.req.headers.host;
    const res = await axios.get(`${protocol}://${host}/api/products`);
    return {
      props: {
        pizzas: res.data,
        error: null
      },
    };
    */
  } catch (err) {
    console.error("Error fetching products:", err.message);
    return {
      props: {
        pizzas: staticPizzas, // Usar datos estáticos en caso de error
        error: "No se pudieron cargar los productos desde la API. Mostrando datos de ejemplo."
      },
    };
  }
}