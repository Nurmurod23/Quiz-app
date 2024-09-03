// src/features/quiz/quizSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialQuestions = [
  {
    category: 'HTML',
    question: 'What does HTML stand for?',
    options: [
      'HyperText Markup Language',
      'Home Tool Markup Language',
      'Hyperlinks and Text Markup Language',
      'Hyperlinking Text Management Language',
    ],
    answer: 'HyperText Markup Language',
  },
  {
    category: 'CSS',
    question: 'Which property is used to change the background color?',
    options: ['backgroundColor', 'bgColor', 'color', 'background'],
    answer: 'background',
  },
  {
    category: 'JavaScript',
    question: 'Which company developed JavaScript?',
    options: ['Netscape', 'Mozilla', 'Microsoft', 'Sun Microsystems'],
    answer: 'Netscape',
  },
  {
    category: 'React.js',
    question: 'Which method is used to create components in React?',
    options: ['render', 'component', 'createComponent', 'React.createElement'],
    answer: 'React.createElement',
  },
  {
    category: 'Redux Toolkit',
    question: 'Which function is used to configure the store in Redux Toolkit?',
    options: ['createStore', 'configureStore', 'applyMiddleware', 'combineReducers'],
    answer: 'configureStore',
  },
  {
    category: 'TypeScript',
    question: 'Which keyword is used to define a type in TypeScript?',
    options: ['interface', 'class', 'type', 'define'],
    answer: 'type',
  },
  {
    category: 'Next.js',
    question: 'Which function is used to fetch data at build time in Next.js?',
    options: ['getServerSideProps', 'getInitialProps', 'getStaticProps', 'useEffect'],
    answer: 'getStaticProps',
  },
];

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
      questions: initialQuestions,
      currentQuestionIndex: 0,
      score: 0,
      status: 'idle', 
    },
    reducers: {
      answerQuestion: (state, action) => {
        const isCorrect = action.payload;
        if (isCorrect) {
          state.score += 1;
        }
        state.currentQuestionIndex += 1;
      },
      resetQuiz: (state) => {
        state.currentQuestionIndex = 0;
        state.score = 0;
      },
      setStatus: (state, action) => {
        state.status = action.payload;
      },
    },
  });
  
  export const { answerQuestion, resetQuiz, setStatus } = quizSlice.actions;
  
  export const selectQuestions = (state) => state.quiz.questions;
  export const selectCurrentQuestionIndex = (state) => state.quiz.currentQuestionIndex;
  export const selectCurrentQuestion = (state) => {
    const { questions, currentQuestionIndex } = state.quiz;
    return questions[currentQuestionIndex];
  };
  export const selectScore = (state) => state.quiz.score;
  export const selectQuizStatus = (state) => state.quiz.status;
  
  export default quizSlice.reducer;
  