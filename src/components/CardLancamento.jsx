import styles from "./CardLancamento.module.css";

export default function CardLancamento({ gasto, excluirGasto }) {
  return (
    <li className={styles.item}>
      <span
        className={gasto.tipo === "Entrada" ? styles.entrada : styles.saida}
      >
        {gasto.descricao} - {gasto.valor} ({gasto.categoria})
      </span>
      <button
        className={styles.botaoExcluir}
        onClick={() => excluirGasto(gasto.id)}
      >
        x
      </button>
    </li>
  );
}
