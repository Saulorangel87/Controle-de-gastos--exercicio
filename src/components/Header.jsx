import styles from "./Header.module.css";

export default function Header({ setIsDarkMode, isDarkMode }) {
  return (
    <div className={styles.Header}>
      <h1>Controle de Gastos</h1>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Light mode" : "Dark mode"}
      </button>
    </div>
  );
}
