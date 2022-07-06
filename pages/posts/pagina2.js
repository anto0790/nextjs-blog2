import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Circulo from '../../components/Layout';


export default function pagina2() {

    return (
        <Layout>
            <div className={styles.container}>
                <Head>
                    <title>Soy la página 2</title>
                </Head>
                <h1>Soy la página 2</h1>

                <Circulo/>

                <Link href="/">
                    <a>Volver</a>
                </Link>
                <br />
                <Link href="/posts/pagina2B">
                    <a>P2B</a>
                </Link>
            </div>
        </Layout>
    )
}
