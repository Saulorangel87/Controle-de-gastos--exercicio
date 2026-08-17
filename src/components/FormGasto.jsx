import styles from "./FormGasto.module.css";
import { useState } from "react";

export default function FormGasto() {
    const [gastos, setGastos] = useState([]);
  return (
    <div className={styles.FormGasto}>
      <input type="text" placeholder="Descrição" />
      <input type="number" placeholder="Valor" />
      <button>+ Adicionar</button>
    </div>
  );
}
