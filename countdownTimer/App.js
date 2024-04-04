import "./styles.css";
import Timer from "./Timer";

export default function App() {
  const timerComplete = () => {};
  return (
    <div className="App">
      <Timer timerValue={8640000000} timerComplete={timerComplete} />
    </div>
  );
}
