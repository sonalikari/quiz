import React from "react";

const Question = ({
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
  selectedOption,
  onNext,
}) => {
  return (
    <div className="bg-white p-6 max-w-2xl mx-auto justify-center items-center">
      {/* Question Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-md font-bold text-dark">
          Question {currentIndex + 1}:
        </h3>
        <div className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-lg">
          📝 Quiz Progress
        </div>
      </div>

      {/* Question Title */}
      <h2 className="text-lg font-semibold text-gray-800 text-center">
        {question.description}
      </h2>

      {/* Options Grid */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        {question.options.map((option) => (
          <button
            key={option.id}
            className={`px-4 py-2 text-md rounded-lg border-2 transition-all duration-200
              ${
                selectedOption === option.id
                  ? "border-blue-500 bg-blue-100"
                  : "border-gray-300 bg-gray-100 hover:bg-gray-200"
              }
            `}
            onClick={() => onAnswer(option.id, option.is_correct)}
          >
            {option.description}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <div className="mt-6 text-center">
        <button
          className={`w-full px-6 py-3 text-lg rounded-lg font-semibold transition-all duration-300
            ${
              selectedOption
                ? "bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white hover:bg-blue-700"
                : "bg-gray-400 text-white cursor-not-allowed"
            }
          `}
          onClick={onNext}
          disabled={!selectedOption}
        >
          Next →
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="mt-4 text-center text-gray-600">
        <p className="text-sm">
          📊 Progress: {currentIndex + 1} / {totalQuestions}
        </p>
      </div>
    </div>
  );
};

export default Question;
