import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentQuestion, selectQuestions, selectScore, answerQuestion, resetQuiz, selectQuizStatus } from '../features/quiz/quizSlice';

export const useQuiz = () => {
  const dispatch = useDispatch();
  const questions = useSelector(selectQuestions);
  const currentQuestion = useSelector(selectCurrentQuestion);
  const score = useSelector(selectScore);
  const quizStatus = useSelector(selectQuizStatus);

  const handleAnswer = (isCorrect) => {
    dispatch(answerQuestion(isCorrect));
  };

  const restartQuiz = () => {
    dispatch(resetQuiz());
  };

  const isLoading = quizStatus === 'loading';
  const isError = quizStatus === 'error';

  return {
    questions,
    currentQuestion,
    score,
    handleAnswer,
    restartQuiz,
    isLoading,
    isError,
  };
};
