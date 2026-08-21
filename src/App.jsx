import Header from "./components/Header.jsx";
import styles from "./App.module.css";
import FormGasto from "./components/FormGasto.jsx";
import { useState } from "react";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className={`${styles.App} ${isDarkMode ? "dark" : ""}`}>
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <FormGasto />
    </div>
  );
}
