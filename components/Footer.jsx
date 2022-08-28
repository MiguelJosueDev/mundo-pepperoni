import Image from 'next/image'
import style from '../styles/Footer.module.css'


const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.item}>
            <Image src="/img/pizzayvino.png" objectFit='cover' layout="fill" alt=""/>
            </div>
            <div className={style.item}>
                <div className={style.card}>
                    <h2 className={style.motto}> SI, TENEMOS LA MEJOR PIZZA DE TEHUACAN AL MEJOR PRECIO.</h2>
                </div>
                <div className={style.card}>
                    <h1 className={style.title}>ENCUENTRANOS</h1>
                    <p className={style.text}>
                    C. Daniel González 940,
                    <br/> Moctezuma, 75740 
                    <br/> Tehuacán, Pue.
                    </p>
                </div>
                <div className={style.card}>
                    <h1 className={style.title}>HORARIO</h1>
                    <p className={style.text}>LUNES - SABADO 
                    <br/> 9:00 AM - 9:00 PM
                    </p>
                    <p className={style.text}>
                        DOMINGO
                        <br/> 12:00 PM - 5:00 PM
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer 