import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <h1>Joao</h1>
          <p>Blab asdasedeass</p>
        </main>
      </div>
    </div>
  );
}

export default App;
