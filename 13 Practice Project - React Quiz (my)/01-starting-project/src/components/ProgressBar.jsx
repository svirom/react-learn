import { useEffect, useState } from 'react';
import styles from '../styles/ProgressBar.module.scss';

const MAX = 10000;

export default function ProgressBar({
  isAnswered,
  onTimeExpired,
  goNextQuestion,
}) {
  const [valueProgress, setValueProgress] = useState(MAX);
  const [timerStep, setTimerStep] = useState(10);

  useEffect(() => {
    isAnswered && setTimerStep(50);
  }, [isAnswered]);

  useEffect(() => {
    const timer = setInterval(() => {
      setValueProgress((prevValue) => {
        if (prevValue <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevValue - timerStep;
      });
    }, 10);

    return () => clearInterval(timer);
  }, [timerStep]);

  useEffect(() => {
    if (valueProgress <= 0) {
      !isAnswered && onTimeExpired('skipped');
      goNextQuestion();
    }
  }, [valueProgress, isAnswered, onTimeExpired, goNextQuestion]);

  return (
    <progress
      className={[styles.progress, isAnswered && styles.answered]
        .filter(Boolean)
        .join(' ')}
      value={valueProgress}
      max={MAX}
    />
  );
}
