import styles from "../../styles/Product.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import PizzaSVG from "../../components/PizzaSVG";

// Datos estáticos de pizzas para desarrollo
const staticPizzas = [
  {
    _id: "1",
    title: "MUNDO PEPPERONI",
    desc: "Pepperoni, pepperoni y mas pepperoni",
    img: "/img/pizza.png",
    prices: [119, 129, 159, 189, 219, 75],
    extraOptions: [
      {
        _id: "1",
        text: "Extra queso",
        price: 15,
      },
      {
        _id: "2",
        text: "Extra pepperoni",
        price: 20,
      },
      {
        _id: "3",
        text: "Orilla rellena de queso",
        price: 25,
      },
    ],
  },
  {
    _id: "2",
    title: "MARGARITA",
    desc: "Deliciosas rodajas de jitomate fresco, mozzarella y albahaca",
    img: "/img/pizza.png",
    prices: [119, 129, 159, 189, 219, 75],
    extraOptions: [
      {
        _id: "1",
        text: "Extra queso",
        price: 15,
      },
      {
        _id: "4",
        text: "Jitomate cherry",
        price: 18,
      },
      {
        _id: "5",
        text: "Albahaca extra",
        price: 10,
      },
    ],
  },
  {
    _id: "3",
    title: "HAWAIANA",
    desc: "Cuadros de jamón y piña natural",
    img: "/img/pizza.png",
    prices: [119, 129, 159, 189, 219, 75],
    extraOptions: [
      {
        _id: "1",
        text: "Extra queso",
        price: 15,
      },
      {
        _id: "6",
        text: "Extra jamón",
        price: 18,
      },
      {
        _id: "7",
        text: "Extra piña",
        price: 12,
      },
    ],
  },
  {
    _id: "4",
    title: "MEXICANA",
    desc: "Rodajas de chile jalapeño, cebolla y chorizo",
    img: "/img/pizza.png",
    prices: [119, 129, 159, 189, 219, 75],
    extraOptions: [
      {
        _id: "1",
        text: "Extra queso",
        price: 15,
      },
      {
        _id: "8",
        text: "Extra jalapeño",
        price: 10,
      },
      {
        _id: "9",
        text: "Extra chorizo",
        price: 20,
      },
    ],
  },
  {
    _id: "5",
    title: "MUNDO QUESO",
    desc: "Triple queso mozzarella",
    img: "/img/pizza.png",
    prices: [119, 129, 159, 189, 219, 75],
    extraOptions: [
      {
        _id: "10",
        text: "Queso cheddar",
        price: 15,
      },
      {
        _id: "11",
        text: "Queso azul",
        price: 22,
      },
      {
        _id: "12",
        text: "Queso manchego",
        price: 18,
      },
    ],
  },
  {
    _id: "6",
    title: "TUNA",
    desc: "Atún y queso mozzarella",
    img: "/img/pizza.png",
    prices: [119, 129, 159, 189, 219, 75],
    extraOptions: [
      {
        _id: "1",
        text: "Extra queso",
        price: 15,
      },
      {
        _id: "13",
        text: "Extra atún",
        price: 25,
      },
      {
        _id: "14",
        text: "Cebolla morada",
        price: 10,
      },
    ],
  }
];

// Nombres de tamaños
const sizeNames = ["MEDIANA", "GRANDE", "EXTRAGRANDE", "FAMILIAR", "JUMBO", "INDIVIDUAL"];

const Product = ({ pizza }) => {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number)
  }
 
  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size]
    setSize(sizeIndex)
    changePrice(difference)
  }

  const handleChange = (e, option) => {
    const checked = e.target.checked
    if(checked){
      changePrice(option.price)
      setExtras((prev)=>[...prev, option])
    } else {
      changePrice(-option.price)
      setExtras(extras.filter((extra)=>extra._id !== option._id))
    }
  }

  const handleClick = () => {
    dispatch(addProduct({...pizza, extras, price, quantity}))
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <PizzaSVG className={styles.pizzaSVG} />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Escoge el tamaño</h3>
        <div className={styles.sizes}>
          {sizeNames.map((sizeName, idx) => (
            <div 
              key={idx} 
              className={`${styles.sizeOption} ${size === idx ? styles.selected : ''}`} 
              onClick={() => handleSize(idx)}
            >
              {sizeName}
            </div>
          ))}
        </div>
        <h3 className={styles.choose}>Selecciona si deseas algún ingrediente extra</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map((option) => (
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className={styles.checkbox}
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor={option.text}>{option.text} (+ ${option.price})</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input 
            onChange={(e) => setQuantity(parseInt(e.target.value))} 
            type="number" 
            defaultValue={1} 
            min={1}
            className={styles.quantity} 
          />
          <button className={styles.button} onClick={handleClick}>Agregar a Mi Orden</button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  try {
    // En lugar de buscar en la base de datos, buscar en nuestros datos estáticos
    const pizza = staticPizzas.find(p => p._id === params.id);
    
    if (!pizza) {
      return {
        notFound: true, // Retorna 404 si la pizza no existe
      };
    }
    
    return {
      props: {
        pizza,
      },
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      notFound: true,
    };
  }
};

export default Product;