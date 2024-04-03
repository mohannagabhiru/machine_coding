import { useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [pause, setPause] = useState(false);
  const interval = useRef(null);

  const handleClick = () => {
    if (!pause) {
      interval.current = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
      setPause(true);
    } else {
      clearInterval(interval.current);
      setPause(false);
    }
  };

  const handleStop = () => {
    clearInterval(interval.current);
  };

  const handleReset = () => {
    handleStop();
    setPause(false);
    setTimer(0);
  };
  return (
    <div className="App">
      <h1>{timer}</h1>
      <div>
        <button onClick={handleClick}>Start</button>
        <button onClick={handleClick}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}