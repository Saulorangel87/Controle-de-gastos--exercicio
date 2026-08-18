import styles from "./FormGasto.module.css";
import { useState, useRef } from "react";

export default function FormGasto() {
  const [gastos, setGastos] = useState([]);
  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState("");
  const descricaoRef = useRef(null);
  const [tipo, setTipo] = useState("Entrada");
  const [pesquisa, setPesquisa] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("Todos");
  const [ordenarPor, setOrdenarPor] = useState("Data");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (descricao === "" || valor === 0) return;
    setGastos([...gastos, { descricao, valor, tipo, id: Date.now() }]);
    setDescricao("");
    setValor(0);
    setTipo("Entrada");
    descricaoRef.current.focus();
  };

  const excluirGasto = (id) => {
    setGastos(gastos.filter((gasto) => gasto.id !== id));
  };

  const saldo = gastos.reduce((acumulado, gasto) => {
    return (
      acumulado +
      (gasto.tipo === "Entrada" ? Number(gasto.valor) : -Number(gasto.valor))
    );
  }, 0);

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
        <label htmlFor="Entrada">Entrada</label>
        <input
          type="radio"
          name="tipo"
          value="Entrada"
          onChange={(e) => setTipo(e.target.value)}
          checked={tipo === "Entrada"}
        />
        <label htmlFor="Saída">Saída</label>
        <input
          type="radio"
          name="tipo"
          value="Saída"
          onChange={(e) => setTipo(e.target.value)}
          checked={tipo === "Saída"}
        />
        <button type="submit">+ Adicionar</button>
      </form>
      <select
        onChange={(e) => setFiltroTipo(e.target.value)}
        value={filtroTipo}
      >
        <option value="Todos">Todos</option>
        <option value="Entrada">Entrada</option>
        <option value="Saída">Saída</option>
      </select>
      <select
        onChange={(e) => setOrdenarPor(e.target.value)}
        value={ordenarPor}
      >
        <option value="Data">Data</option>
        <option value="Valor">Valor</option>
      </select>
      <input
        type="text"
        placeholder="Pesquisar"
        onChange={(e) => setPesquisa(e.target.value)}
        value={pesquisa}
      />
        <p>Total: {gastos.length}</p>
        <p>Saldo: {saldo}</p>
      <ul className={styles.lista}>
        {gastos
          .filter(
            (gasto) =>
              gasto.descricao.toLowerCase().includes(pesquisa.toLowerCase()) &&
              (filtroTipo === "Todos" || filtroTipo === gasto.tipo),
          )
          .sort((a, b) => {
            if (ordenarPor === "Data") {
              return b.id - a.id;
            } else if (ordenarPor === "Valor") {
              return Number(b.valor) - Number(a.valor);
            }
          })
          .map((gasto) => (
            <li key={gasto.id} className={styles.item}>
              <span
                className={
                  gasto.tipo === "Entrada" ? styles.entrada : styles.saida
                }
              >
                {gasto.descricao} - {gasto.valor}
              </span>
              <button
                className={styles.botaoExcluir}
                onClick={() => excluirGasto(gasto.id)}
              >
                x
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
