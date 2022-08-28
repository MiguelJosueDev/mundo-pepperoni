import style from '../styles/Pizzas.module.css';
import PizzaCard from './PizzaCard';


const Pizzas = ({ pizzas }) => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>LA MEJOR PIZZA DE TEHUACAN</h1>
            <p className={style.desc}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente sint doloribus unde itaque consectetur accusamus culpa, veniam velit quod fugit dolores corporis sunt odit ex, obcaecati ipsa ad soluta sed?
            </p>
            <div className={style.wrapper}>
                {pizzas.map((pizza) => (
                <PizzaCard key={pizza._id} pizza={pizza}/>  
                ))}
            </div>
        </div>
    )
}

export default Pizzas 