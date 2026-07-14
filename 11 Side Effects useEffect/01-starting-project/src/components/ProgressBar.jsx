import { useState, useEffect } from 'react';

const TIMER = 3000;

export default function ProgressBar({ timer }) {
  const [remainingTime, stateRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('INTERVAL');
      stateRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
