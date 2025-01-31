import React from "react";
import { useLocation, Link } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const { finalScore, correctAnswers, totalQuestions } = location.state || {
    finalScore: 0,
    correctAnswers: 0,
    totalQuestions: 0,
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-teal-500 text-white px-4 py-8">
      <div className="bg-white text-green-800 p-8 rounded-xl shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <h2 className="text-4xl font-extrabold text-center mb-4">
          Quiz Completed!
        </h2>
        <p className="text-xl text-center mb-4">
          <span className="text-3xl font-semibold">{finalScore}</span> /{" "}
          <span className="text-lg">{totalQuestions * 4}</span> points
        </p>
        <div className="text-center mb-6">
          <p className="text-lg">
            Correct Answers:{" "}
            <span className="font-semibold text-xl">{correctAnswers}</span> out
            of <span className="font-semibold">{totalQuestions}</span>
          </p>
        </div>
        <Link to="/">
          <button className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 focus:outline-none">
            Play Again
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ResultPage;
