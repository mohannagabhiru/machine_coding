import { useRef, useState, useEffect } from "react";

const Timer = ({ timerValue, timerComplete }) => {
  const [timer, setTimer] = useState(timerValue);
  const timerRef = useRef(null);

  useEffect(() => {
    console.log("in mount");
    timerRef.current = setInterval(() => {
      setTimer((timer) => {
        if (timer > 0) {
          return timer - 1000;
        } else {
          console.log("test");
          timerComplete();
          return 0;
        }
      });
    }, 1000);
    return () => {
      console.log("in unmount");
      clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clearInterval(timerRef.current);
      timerComplete();
    }
  }, [timer]);

  const getFormattedTime = (time) => {
    const SECONDS = 1000;
    const MINUTES = 60 * SECONDS;
    const HOURS = 60 * MINUTES;
    const DAYS = 24 * HOURS;

    const days = Math.floor(time / DAYS);
    const hours = Math.floor((time % DAYS) / HOURS);
    const minutes = Math.floor((time % HOURS) / MINUTES);
    const seconds = Math.floor((time % MINUTES) / SECONDS);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div>
      <h1>Timer {getFormattedTime(timer)}</h1>
    </div>
  );
};

export default Timer;
