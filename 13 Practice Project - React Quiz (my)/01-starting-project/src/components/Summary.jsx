import imgSummary from '../assets/quiz-complete.png';
import styles from '../styles/Summary.module.scss';

function getRoundedPercentages(counts, total) {
  const raw = counts.map((count) => (total ? (count / total) * 100 : 0));
  const rounded = raw.map(Math.floor);
  let remainder = 100 - rounded.reduce((sum, value) => sum + value, 0);

  const order = raw
    .map((value, index) => ({ index, fraction: value - rounded[index] }))
    .sort((a, b) => b.fraction - a.fraction);

  for (let i = 0; i < remainder; i++) {
    rounded[order[i].index] += 1;
  }

  return rounded;
}

export default function Summary({ result, answerStatus }) {
  const answerSkipped = answerStatus.filter(answer => answer === 'skipped');
  const answerCorrect = answerStatus.filter(answer => answer === true);
  const answerIncorrect = answerStatus.filter(answer => answer === false);
  const [skippedPercent, correctPercent, incorrectPercent] = getRoundedPercentages(
    [answerSkipped.length, answerCorrect.length, answerIncorrect.length],
    answerStatus.length,
  );
  return (
    <div className={styles.summary}>
      <img src={imgSummary} alt="" />
      <h2>Quiz completed!</h2>
      <div className={styles['summary-stats']}>
        <div>
          <p className={styles.number}>{skippedPercent}%</p>
          <p className={styles.text}>skipped</p>
        </div>
        <div>
          <p className={styles.number}>{correctPercent}%</p>
          <p className={styles.text}>answered correctly</p>
        </div>
        <div>
          <p className={styles.number}>{incorrectPercent}%</p>
          <p className={styles.text}>answered incorrectly</p>
        </div>
      </div>
      <ol>
        {result.map((res, index) => {
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className={styles.question}>{res[0]}</p>
              <p
                className={[
                  styles['user-answer'],
                  answerStatus[index] === true && styles.correct,
                  answerStatus[index] === false && styles.wrong,
                  answerStatus[index] === 'skipped' && styles.skipped,
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {res[1]}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
