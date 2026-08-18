import styles from "./FormGasto.module.css";
import { useState, useRef } from "react";

export default function FormGasto() {
  const [gastos, setGastos] = useState([]);
  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState("");
  const descricaoRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (descricao === "" || valor === 0) return;
    setGastos([...gastos, { descricao, valor, id: Date.now() }]);
    setDescricao("");
    setValor(0);
    descricaoRef.current.focus();
  };

  const excluirGasto = (id) => {
    setGastos(gastos.filter((gasto) => gasto.id !== id));
  };

  return (
    <div className={styles.FormGasto}>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <input
          type="text"
          placeholder="Descrição"
          onChange={(e) => setDescricao(e.target.value)}
          value={descricao}
          ref={descricaoRef}
        />
        <input
          type="number"
          placeholder="Valor"
          onChange={(e) => setValor(e.target.value)}
          value={valor}
        />
        <button type="submit">+ Adicionar</button>
      </form>
      <ul className={styles.lista}>
        {gastos.map((gasto) => (
          <li key={gasto.id} className={styles.item}>
            {gasto.descricao} - {gasto.valor}
            <button className={styles.botaoExcluir} onClick={() => excluirGasto(gasto.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
