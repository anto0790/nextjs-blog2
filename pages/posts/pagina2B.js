import Link from 'next/link';
import Layout from '../../components/Layout';
import styles from '../../styles/Home.module.css';
import CarComponent, {dato2} from '../../components/CarComponent';


export default function pagina2B() {
    return (
     
            <div className={styles.container}>
                <h1>Soy la página 2B</h1>

                <h2>{dato2}</h2>

                <Link href="/posts/pagina2">
                    <a>Volver a p2</a>
                </Link>
                <Layout />
                <CarComponent/>
                
            </div> 
    )
  
}