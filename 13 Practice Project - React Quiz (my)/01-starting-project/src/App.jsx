import { useEffect, useState, useCallback } from 'react';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import QuestionsCard from './components/QuestionsCard';
import QUESTIONS from './questions.js';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, updateAnswers] = useState([]);
  const [currentAnsweredStatus, setCurrentAnsweredStatus] = useState(false);
  const [nextQuestion, setNextQuestion] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const answeredStatus = useCallback(function answeredStatus(status) {
    setCurrentAnsweredStatus(status);
  }, []);

  const handleCurrentAnswer = useCallback(
    function handleCurrentAnswer(answer) {
      updateAnswers((prevAnswers) => [...prevAnswers, answer]);
      answeredStatus(true);
    },
    [answeredStatus],
  );

  const handleNextQuestion = useCallback(() => {
    setNextQuestion(true);
  }, []);

  useEffect(() => {
    let timer;
    if (nextQuestion) {
      setIsAnswerCorrect(answers.at(-1));
      timer = setTimeout(() => {
        setCurrentQuestionIndex((prevIndex) =>
          prevIndex < QUESTIONS.length - 1 ? prevIndex + 1 : -1,
        );

        answeredStatus(false);
        setNextQuestion(false);
        setIsAnswerCorrect(null);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [nextQuestion, answeredStatus]);

  return (
    <main className="main">
      <Header />
      <div className="quiz">
        {currentQuestionIndex >= 0 && (
          <>
            <ProgressBar
              key={`progress-${currentQuestionIndex}`}
              isAnswered={currentAnsweredStatus}
              onTimeExpired={handleCurrentAnswer}
              goNextQuestion={handleNextQuestion}
            />
            <QuestionsCard
              key={`card-${currentQuestionIndex}`}
              questionIndex={currentQuestionIndex}
              answer={handleCurrentAnswer}
              answerFinished={isAnswerCorrect}
            />
          </>
        )}
      </div>
    </main>
  );
}

export default App;
