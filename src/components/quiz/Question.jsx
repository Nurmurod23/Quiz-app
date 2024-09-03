import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button';

const Question = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    const isCorrect = selectedOption === question.answer;
    onAnswer(isCorrect);
  };

  return (
    <div className="question p-4 bg-base-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{question.category}</h2>
      <p className="text-lg mb-4">{question.question}</p>
      <div className="options space-y-4">
        {question.options.map((option, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input
              type="radio"
              name="quiz-option"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
              className="radio radio-primary"
            />
            <span className="text-lg">{option}</span>
          </label>
        ))}
      </div>
      <Button className="btn btn-primary mt-4" onClick={handleSubmit} disabled={selectedOption === null}>
        Submit
      </Button>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.shape({
    category: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default Question;
