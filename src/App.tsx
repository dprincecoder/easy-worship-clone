import Topbar from "./components/Topbar";
import styles from "./styles.module.css";

function App() {
  return <div className={styles.app}>
    <Topbar />
    <div className={styles.threeRowLayout}></div>
  </div>;
}

export default App;
