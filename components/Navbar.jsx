import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Navbar = () => {

    const quantity = useSelector((state) => state.cart.quantity)
  
    return (
      <div className={styles.container}>
          <div className={styles.item}>
          <div className={styles.callButton} onClick="">
            
            <Image src='/img/telephone.png' alt="" width="30" height="30"/>
          </div>
          <div className={styles.texts}>
            <div className={styles.text}>ORDENA AHORA!</div>
            <div className={styles.text}>238 185 5758</div>
          </div>
          </div>
          <div className={styles.item}>
            <ul className={styles.list}>
            <Link href={`/`} passHref>
              <li className={styles.listItem}>Homepage</li>
              </Link>
              <li className={styles.listItem}>Ofertas</li>
              <li className={styles.listItem}>Menu</li>
              <Image src='/img/mundo_pepperoni_logo1.png' alt="" width='100' height='100'/>
              <li className={styles.listItem}>Eventos</li>
              <li className={styles.listItem}>Blog</li>
              <li className={styles.listItem}>Contacto</li>
            </ul>
          </div>
          <Link href="/cart" passHref>
          <div className={styles.item}>
            <div className={styles.cart}>
            <Image src='/img/cart.png' alt="" width="30px" height="30px"/>
            <div className={styles.counter}>{quantity}</div>
            </div>
          </div>
          </Link>
      </div>
    )
  }

  export default Navbar