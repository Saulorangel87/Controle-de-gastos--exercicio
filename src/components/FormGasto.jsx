import styles from "./FormGasto.module.css";
import { useState } from "react";

export default function FormGasto() {
  const [gastos, setGastos] = useState([]);
  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (descricao === "" || valor === 0) return;
    setGastos([...gastos, { descricao, valor, id: Date.now() }]);
    setDescricao("");
    setValor(0);
  };

  return (
    <div className={styles.FormGasto}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Descrição"
          onChange={(e) => setDescricao(e.target.value)}
          value={descricao}
        />
        <input
          type="number"
          placeholder="Valor"
          onChange={(e) => setValor(e.target.value)}
          value={valor}
        />
        <button type="submit">+ Adicionar</button>
      </form>
      <ul>
        {gastos.map((gasto) => (
          <li key={gasto.id}>
            {gasto.descricao} - {gasto.valor}
          </li>
        ))}
      </ul>
    </div>
  );
}
