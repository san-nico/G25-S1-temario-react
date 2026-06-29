import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";

function Navbar({ metadata }) {
  return (
    <nav className={styles.navbar}>
      <img className={styles.image} src={logo}></img>
      <div className={styles.content}>
        <h1 className={styles.title}>{metadata.titulo}</h1>
        <a className={styles.link} href={metadata.url}>
          {metadata.url}
        </a>
        <p className={styles.date}>Última Actualización: {metadata.fecha}</p>
      </div>
    </nav>
  );
}

export default Navbar;
