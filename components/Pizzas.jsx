import style from '../styles/Pizzas.module.css';
import PizzaCard from './PizzaCard';

const Pizzas = ({ pizzas }) => {
    // Asegurarse de que pizzas siempre sea un array
    const pizzaItems = Array.isArray(pizzas) ? pizzas : [];
    
    return (
        <div className={style.container}>
            <h1 className={style.title}>LA MEJOR PIZZA DE TEHUACAN</h1>
            <p className={style.desc}>
                ¡Descubre nuestra selección de deliciosas pizzas artesanales hechas con los mejores ingredientes! Desde las clásicas hasta nuestras creaciones especiales, hay una pizza perfecta para cada ocasión.
            </p>
            <div className={style.wrapper}>
                {pizzaItems.length > 0 ? (
                    pizzaItems.map((pizza) => (
                        <PizzaCard key={pizza._id} pizza={pizza}/>  
                    ))
                ) : (
                    <div className={style.empty}>
                        <p>No hay pizzas disponibles en este momento. ¡Estamos trabajando en ello!</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Pizzas 