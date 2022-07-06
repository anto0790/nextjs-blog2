import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Layout, { dato } from '../components/Layout';
import React from 'react';
import CarComponent from '../components/CarComponent';
import Circulo from '../components/Circulo';


export default function Home() {

  return (
    <Layout>
      <div className={styles.container}>
        <CarComponent />
        
        <div className={styles.container}>
          <Circulo />

          <img src="/images/corazon.jpg" alt="Your Name" height={144} width={144} />
        </div>

        <h1>{dato}</h1>

        <Link href="/posts/pagina2">
          <a className={styles.colorA}>Ir a página 2</a>
        </Link>
      </div>

    </Layout>
  )
}

