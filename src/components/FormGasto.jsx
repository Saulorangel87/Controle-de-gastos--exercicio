import styles from "./FormGasto.module.css";
import { useState, useRef, useEffect } from "react";

const CHAVE_STORAGE = "gastos";

export default function FormGasto() {
  const [gastos, setGastos] = useState(() => {
    const dadosSalvo = JSON.parse(localStorage.getItem(CHAVE_STORAGE)) || [];
    return dadosSalvo;
  });

  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState("");
  const descricaoRef = useRef(null);
  const [tipo, setTipo] = useState("Entrada");
  const [pesquisa, setPesquisa] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("Todos");
  const [ordenarPor, setOrdenarPor] = useState("Data");
  const [categoria, setCategoria] = useState("Alimentação");
  const [filtroCategoria, setFiltroCategoria] = useState("Todos");
  const totalPorCategoria = gastos.reduce((acumulado, gasto) => {
    if (gasto.tipo === "Entrada") return acumulado;
    acumulado[gasto.categoria] =
      (acumulado[gasto.categoria] || 0) + Number(gasto.valor);
    return acumulado;
  }, {});
  const categoriaMaiorGasto = Object.keys(totalPorCategoria).reduce(
    (maior, categoria) => {
      if (totalPorCategoria[maior] < totalPorCategoria[categoria]) {
        return categoria;
      }
      return maior;
    },
    Object.keys(totalPorCategoria)[0],
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (descricao === "" || valor === 0) return;
    setGastos([
      ...gastos,
      { descricao, valor, tipo, categoria, id: Date.now() },
    ]);
    setDescricao("");
    setValor(0);
    setTipo("Entrada");
    setCategoria("Alimentação");
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

  useEffect(() => {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(gastos));
  }, [gastos]);

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
        <select
          onChange={(e) => setCategoria(e.target.value)}
          value={categoria}
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Transporte">Transporte</option>
          <option value="Lazer">Lazer</option>
          <option value="Salário">Salário</option>
        </select>
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
        onChange={(e) => setFiltroCategoria(e.target.value)}
        value={filtroCategoria}
      >
        <option value="Todos">Todos</option>
        <option value="Alimentação">Alimentação</option>
        <option value="Transporte">Transporte</option>
        <option value="Lazer">Lazer</option>
        <option value="Salário">Salário</option>
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
      {Object.keys(totalPorCategoria).map((cat) => (
        <p key={cat}>
          {cat}: {totalPorCategoria[cat]}
        </p>
      ))}
      {categoriaMaiorGasto && <p>Maior gasto: {categoriaMaiorGasto}</p>}

      <ul className={styles.lista}>
        {gastos
          .filter(
            (gasto) =>
              gasto.descricao.toLowerCase().includes(pesquisa.toLowerCase()) &&
              (filtroTipo === "Todos" || filtroTipo === gasto.tipo) &&
              (filtroCategoria === "Todos" ||
                filtroCategoria === gasto.categoria),
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
                {gasto.descricao} - {gasto.valor} ({gasto.categoria})
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
