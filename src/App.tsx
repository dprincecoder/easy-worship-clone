import "./app.css";
import NurseryAlert from "./components/NurseryAlert";
import Topbar from "./components/Topbar";
import { RootState, useAppSelector } from "./redux/store";

function App() {
  const { isVisible } = useAppSelector(
    (state: RootState) => state.nurseryAlert
  );
  const handleValueChange = (value: any) => {
    alert(value);
  };
  const t = false;
  return (
    <div className={`app ${t ? "footerActive" : ""}`}>
      <Topbar onValueChange={handleValueChange} />
      <div className={`threeRowLayout`}>
        <div className="leftView">Left</div>
        <div className="centerView">Center</div>
        <div className="rightView">Right</div>
      </div>
      <NurseryAlert />
    </div>
  );
}

export default App;
