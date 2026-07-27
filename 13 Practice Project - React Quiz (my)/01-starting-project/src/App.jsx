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

  const answeredStatus = useCallback(function answeredStatus(status) {
    setCurrentAnsweredStatus(status);
  }, []);

  const handleCurrentAnswer = useCallback(function handleCurrentAnswer(answer) {
    updateAnswers((prevAnswers) => [...prevAnswers, answer]);
    answeredStatus(true);
  }, [answeredStatus]);

  const handleNextQuestion = useCallback(() => {
    setNextQuestion(true);
  }, []);

  useEffect(() => {
    if (nextQuestion) {
      setCurrentQuestionIndex(
        (prevIndex) => prevIndex < QUESTIONS.length - 1 ? prevIndex + 1 : -1,
      );
      answeredStatus(false);
      setNextQuestion(false);
    }
  }, [nextQuestion, answeredStatus]);

  return (
    <main className="main">
      {console.log(answers)}
      <Header />
      <div className="quiz">
        {currentQuestionIndex >= 0 && (
          <>
            <ProgressBar
              key={currentQuestionIndex}
              isAnswered={currentAnsweredStatus}
              onTimeExpired={handleCurrentAnswer}
              goNextQuestion={handleNextQuestion}
            />
            <QuestionsCard
              questionIndex={currentQuestionIndex}
              answer={handleCurrentAnswer}
            />
          </>
        )}
      </div>
    </main>
  );
}

export default App;
