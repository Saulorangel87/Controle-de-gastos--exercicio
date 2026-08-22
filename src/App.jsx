import Header from "./components/Header.jsx";
import styles from "./App.module.css";
import FormGasto from "./components/FormGasto.jsx";
import { useState, useEffect } from "react";

const CHAVE_STORAGE = "tema";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const temaSalvo = localStorage.getItem(CHAVE_STORAGE);
    return temaSalvo === "true";
  });
  useEffect(() => {
    localStorage.setItem(CHAVE_STORAGE, isDarkMode);
  }, [isDarkMode]);
  return (
    <div className={`${styles.App} ${isDarkMode ? "dark" : ""}`}>
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <FormGasto />
    </div>
  );
}
