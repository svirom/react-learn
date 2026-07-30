import { useState } from 'react';
import styles from '../styles/QuestionsCard.module.scss';
import QUESTIONS from '../questions.js';
import ANSWERS_INDEXES from '../answer_indexes';

export default function QuestionsCard({
  questionIndex,
  answer,
  answerFinished,
  questionResult
}) {
  const answers = QUESTIONS[questionIndex]['answers'];
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  function handleQuestionSubmit(index) {
    index === ANSWERS_INDEXES[questionIndex] ? answer(true) : answer(false);
    setSelectedAnswerIndex(index);
    questionResult(QUESTIONS[questionIndex]['text'], QUESTIONS[questionIndex]['answers'][index])
  }

  return (
    <div className={styles['questions-card']}>
      <h2>{QUESTIONS[questionIndex]['text']}</h2>

      <ul className={styles.answers}>
        {answers.map((answer, index) => {
          const isSelected = selectedAnswerIndex === index;
          const isDisabled =
            (selectedAnswerIndex !== null && !isSelected) ||
            (selectedAnswerIndex === null && answerFinished === 'skipped');

          return (
            <li
              key={`${QUESTIONS[questionIndex]['id']}-${index}`}
              className={styles.answer}
            >
              <button
                className={[
                  styles.answer,
                  isSelected && styles.selected,
                  isSelected && answerFinished === true && styles.correct,
                  isSelected && answerFinished === false && styles.wrong,
                  isDisabled && styles.disabled,
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
