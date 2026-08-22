import styles from "./ResumoSaldo.module.css";

export default function ResumoSaldo({ dados }) {
  return (
    <div className={styles.ResumoSaldo}>
      <p>Saldo: {dados.saldo}</p>
      <p>Gasto do mês: {dados.gastoDoMes}</p>
      <p>Gasto da semana: {dados.gastoDaSemana}</p>
      <p>Total entrada: {dados.totalEntrada}</p>
      <p>Total saída: {dados.totalSaida}</p>
      <p>Média por gasto: {dados.mediaGasto}</p>
      {Object.keys(dados.totalPorCategoria).map((cat) => (
        <p key={cat}>
          {cat}: {dados.totalPorCategoria[cat]}
        </p>
      ))}
      {dados.categoriaMaiorGasto && (
        <p>Maior gasto: {dados.categoriaMaiorGasto}</p>
      )}
    </div>
  );
}
