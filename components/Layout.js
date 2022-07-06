import styles from './layout.module.css';


export const dato = "soy un dato importado de layout";

export default function Layout({ children }) {
  return <div className={styles.container}>{children}

          <h2>contenido de layout</h2>

  </div>;
}

