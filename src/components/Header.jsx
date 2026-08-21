import styles from "./Header.module.css";

export default function Header({ setIsDarkMode, isDarkMode }) {
  return (
    <div className={styles.Header}>
      <h1>Controle de Gastos</h1>
      <button
        className={styles.botaoTema}
        onClick={() => setIsDarkMode(!isDarkMode)}
        aria-label="Alternar tema"
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
}
