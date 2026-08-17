import Header from "./components/Header.jsx";
import styles from "./App.module.css";
import FormGasto from "./components/FormGasto.jsx";

export default function App() {
  return (
    <div className={styles.App}>
      <Header />
      <FormGasto />
    </div>
  );
}
