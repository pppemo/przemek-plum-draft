import { Header } from "./components/Header/Header";
import { Offer } from "./pages/Offer/Offer";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.root}>
      <Header />
      <Offer />
    </div>
  );
}

export default App;
