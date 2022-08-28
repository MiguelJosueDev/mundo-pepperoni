import Image from "next/image";
import styles from "../styles/PizzaCarousel.module.css";

const pizzaCarousel = () => {
  return (
    <div className={styles.container}>
      <div className="pizza-carousel-content">
        <h1 className={styles.title}>Award-Winning Pizza</h1>
      </div>
      <div className={styles.item}>
        <div className={styles.pizzaContainer}>
          <Image
            src="img/pizza.png"
            alt="Barro's Special Pizza"
            className="pizza"
          />
        </div>
        <div className={styles.pizzaContainer}>
          <Image src="img/pizza.png" alt="" className="pizza" />
        </div>
        <div className={styles.pizzaContainer}>
          <Image src="img/pizza.png" alt="" className="pizza" />
        </div>
        <div className={styles.pizzaContainer}>
          <Image src="img/pizza.png" alt="" className="pizza" />
        </div>
        <div className={styles.pizzaContainer}>
          <Image
            src="img/pizza.png"
            alt="Barro's BBQ Chicken Pizza"
            classNameName="pizza"
          />
        </div>
      </div>
    </div>
  );
};
