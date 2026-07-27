import { useEffect, useState } from 'react';
import styles from '../styles/QuestionsCard.module.scss';
import QUESTIONS from '../questions.js';
import ANSWERS_INDEXES from '../answer_indexes';

export default function QuestionsCard({ questionIndex, answer }) {
  const answers = QUESTIONS[questionIndex]['answers'];
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  function handleQuestionSubmit(index) {
    index === ANSWERS_INDEXES[questionIndex] ? answer(true) : answer(false);
    setSelectedAnswerIndex(index);
  }
  useEffect(() => {
    setSelectedAnswerIndex(null);
  }, [questionIndex]);

  return (
    <div className={styles['questions-card']}>
      <h2>{QUESTIONS[questionIndex]['text']}</h2>

      <ul className={styles.answers}>
        {answers.map((answer, index) => {
          return (
            <li
              key={`${QUESTIONS[questionIndex]['id']}-${index}`}
              className={styles.answer}
            >
              <button
                className={[
                  styles.answer,
                  selectedAnswerIndex === index && styles.selected,
                  selectedAnswerIndex !== null &&
                    selectedAnswerIndex !== index &&
                    styles.disabled,
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => handleQuestionSubmit(index)}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
