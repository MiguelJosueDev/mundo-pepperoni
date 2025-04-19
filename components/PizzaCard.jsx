import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";
import PizzaSVG from "./PizzaSVG";

const PizzaCard = ({ pizza }) => {
  // Definir nombres de tamaños según el menú
  const sizeNames = ["MEDIANA", "GRANDE", "EXTRAGRANDE", "FAMILIAR", "JUMBO", "INDIVIDUAL"];
  
  // Personalizar color según tipo de pizza
  const getColor = (title) => {
    if (title.includes("PEPPERONI")) return "#e31837";
    if (title.includes("QUESO")) return "#ffc72c";
    if (title.includes("HAWAIANA")) return "#ff9900";
    if (title.includes("MEXICANA")) return "#007f4f";
    if (title.includes("VEGGIE")) return "#00a550";
    if (title.includes("TUNA")) return "#0077c0";
    return "#e31837"; // Color por defecto
  };
  
  // Mostrar solo los 3 tamaños más populares
  const popularSizes = [0, 2, 4]; // Mediana, ExtraGrande, Jumbo
  
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <div className={styles.imageContainer}>
          <PizzaSVG className={styles.pizzaImage} />
          <div className={styles.pizzaBadge} style={{ backgroundColor: getColor(pizza.title) }}>
            {pizza.title.includes("Especialidad") ? "ESPECIAL" : ""}
          </div>
        </div>
      </Link>
      
      <h1 className={styles.title}>{pizza.title}</h1>
      <p className={styles.desc}>{pizza.desc}</p>
      
      <div className={styles.priceContainer}>
        {popularSizes.map((index) => (
          <div key={index} className={styles.priceItem}>
            <span className={styles.size}>{sizeNames[index]}</span>
            <span className={styles.price}>${pizza.prices[index]}</span>
          </div>
        ))}
      </div>
      
      <Link href={`/product/${pizza._id}`} passHref>
        <button className={styles.button}>Ordenar Ahora</button>
      </Link>
    </div>
  );
};

export default PizzaCard;