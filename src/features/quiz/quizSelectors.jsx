import { createSelector } from 'reselect';

const selectQuiz = (state) => state.quiz;

const selectQuestions = createSelector(
  [selectQuiz],
  (quiz) => quiz.questions
);

const selectCurrentQuestionIndex = createSelector(
  [selectQuiz],
  (quiz) => quiz.currentQuestionIndex
);

const selectCurrentQuestion = createSelector(
  [selectQuestions, selectCurrentQuestionIndex],
  (questions, currentQuestionIndex) => questions[currentQuestionIndex]
);

const selectScore = createSelector(
  [selectQuiz],
  (quiz) => quiz.score
);

const selectQuizStatus = createSelector(
  [selectQuiz],
  (quiz) => quiz.status
);

export {
  selectQuestions,
  selectCurrentQuestion,
  selectScore,
  selectCurrentQuestionIndex,
  selectQuizStatus,
};
