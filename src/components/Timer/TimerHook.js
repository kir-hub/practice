import React, { useState, useEffect } from 'react';
import styles from './Timer.module.css';
import { format, startOfYear, addMilliseconds } from 'date-fns';

function TimerHook() {
  const [time, setTime] = useState(startOfYear(new Date()));
  const [isRun, setIsRun] = useState(false);

  useEffect(() => {
    if (isRun) {
      const intervalId = setInterval(() => {
        setTime((prevValue) => addMilliseconds(prevValue, 1000));
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isRun, time]);

  return (
    <div>
      <h1>{format(time, 'HH:mm:ss')}</h1>
      <button onClick={() => setIsRun(!isRun)}>
        {isRun ? 'stop ' : 'start'}
      </button>
      <button onClick={() => setTime(startOfYear(time))}>reset</button>
    </div>
  );
}

export default TimerHook;
