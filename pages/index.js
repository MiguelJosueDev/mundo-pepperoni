import axios from 'axios'
import Head from 'next/head'
import Featured from '../components/Featured'
import Pizzas from '../components/Pizzas'
import styles from '../styles/Home.module.css'

export default function Home({ pizzas }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <Pizzas pizzas={pizzas} />
      
      </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzas: res.data,
    },
  }
}