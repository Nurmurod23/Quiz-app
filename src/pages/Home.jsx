import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentQuestion, selectQuizStatus } from '../features/quiz/quizSlice';
import Quiz from '../components/quiz/Quiz';
import Result from '../components/quiz/Result';

const Home = () => {
  const currentQuestion = useSelector(selectCurrentQuestion);
  const quizStatus = useSelector(selectQuizStatus);

  if (quizStatus === 'loading') return <div className="container mx-auto p-4">Loading...</div>;
  if (quizStatus === 'error') return <div className="container mx-auto p-4">Error loading quiz</div>;

  return (
    <div className="container mx-auto p-4">
      {currentQuestion ? <Quiz /> : <Result />}
    </div>
  );
};

export default Home;
