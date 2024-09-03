// src/components/quiz/Quiz.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentQuestion, selectQuestions, answerQuestion, selectQuizStatus } from '../../features/quiz/quizSlice';
import Question from './Question';

const Quiz = () => {
  const dispatch = useDispatch();
  const currentQuestion = useSelector(selectCurrentQuestion);
  const questions = useSelector(selectQuestions);
  const quizStatus = useSelector(selectQuizStatus);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (currentQuestion && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      dispatch(answerQuestion(false));
      setTimeLeft(10);
    }
  }, [timeLeft, currentQuestion, dispatch]);

  const handleAnswer = (isCorrect) => {
    dispatch(answerQuestion(isCorrect));
    setTimeLeft(10);
  };

  if (quizStatus === 'loading') return <div>Loading...</div>;
  if (quizStatus === 'error') return <div>Error loading quiz</div>;
  if (questions.length === 0 || currentQuestion === undefined) return <div>No more questions</div>;

  return (
    <div className="quiz p-6">
      {currentQuestion ? (
        <>
          <Question
            question={currentQuestion}
            onAnswer={handleAnswer}
          />
          <div className="timeline timeline-vertical mt-4">
            <div className="timeline-item">
              <div className="timeline-middle">
                <div className="timeline-dot bg-primary"></div>
              </div>
              <div className="timeline-start">Time left: {timeLeft}s</div>
              <hr className="bg-primary" />
            </div>
          </div>
        </>
      ) : (
        <div>Loading question...</div>
      )}
    </div>
  );
};

export default Quiz;