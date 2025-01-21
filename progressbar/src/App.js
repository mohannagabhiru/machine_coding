import logo from './logo.svg';
import './App.css';
import ProgressBar from './Components/ProgressBar';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [progress, setProgress] = useState(0);
  let intervalRef = useRef(null);
  let countRef = useRef(0);

  console.log(countRef.current);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 10);
        countRef.current += 1;
        if(countRef.current == 10){
          clearInterval(intervalRef.current)
        }
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])
  return (
    <div className="app">
          <ProgressBar progress={progress}/>
    </div>
  );
}

export default App;
