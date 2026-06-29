import styles from "./CardNull.module.css";

/* ========== COMPONENTE ========== */
function Card({ card }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>
        Clase {card.id}: {card.titulo}
      </h3>
    </div>
  );
}

export default Card;
