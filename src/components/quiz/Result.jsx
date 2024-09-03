import React from 'react';
import { useSelector } from 'react-redux';
import { selectScore, selectQuizStatus } from '../../features/quiz/quizSelectors';

const Result = () => {
  const score = useSelector(selectScore);
  const quizStatus = useSelector(selectQuizStatus);

  if (quizStatus === 'loading') return (
    <div className="flex justify-center items-center h-full">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
  if (quizStatus === 'error') return <div className="container mx-auto p-4 text-center text-red-600 font-bold">Error loading quiz</div>;

  return (
    <div className="result p-6 flex justify-center items-center">
      <div className={`p-4 rounded-lg shadow-lg ${score > 0 ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-800'}`}>
        <h2 className="text-3xl font-bold mb-4">
          {score > 0 ? `Congratulations! Your Score: ${score}` : 'No Score Available'}
        </h2>
        {score === 0 && <p className="text-lg text-gray-600">It looks like you didn't score any points. Better luck next time!</p>}
      </div>
    </div>
  );
};

export default Result;