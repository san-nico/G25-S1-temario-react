import styles from "./Card.module.css";

function Card({ card }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          Clase {card.id}: {card.titulo}
        </h3>

        <img className={styles.icon} src={`/img/${card.icono}`} alt="" />
      </div>

      <div className={styles.stats}>
        <div className={styles.row}>
          <span className={styles.label}>Fecha</span>
          <span className={styles.value}>{card.fecha}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Modalidad</span>
          <span className={styles.value}>{card.modalidad}</span>
        </div>
      </div>

      <div className={styles.bloques}>
        <div className={styles.sub}>
          {card.bloques?.map((bloque, i) => (
            <a
              key={i}
              className={`${styles.chip} ${styles.bloque}`}
              href={bloque}
              target="_blank"
              rel="noopener noreferrer"
            >
              Bloque {i + 1}
            </a>
          ))}

          {card.ayudantia && (
            <a
              className={`${styles.chip} ${styles.bloque}`}
              href={card.ayudantia}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ayudantía
            </a>
          )}
        </div>

        <div className={styles.sub}>
          <a
            className={`${styles.chip} ${styles.diapositiva}`}
            href={card.diapositiva}
            target="_blank"
            rel="noopener noreferrer"
          >
            Diapositiva
          </a>

          <a
            className={`${styles.chip} ${styles.formulario}`}
            href={card.formulario}
            target="_blank"
            rel="noopener noreferrer"
          >
            Entregar tarea
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
