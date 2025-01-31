import React, { useState, useEffect } from "react";
import axios from "axios";
import Question from "../components/Question";
import Timer from "../components/Timer";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [loading, setLoading] = useState(true);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/quiz")
      .then((response) => {
        setQuestions(response.data.questions);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching quiz data", error));
  }, []);

  const handleAnswer = (optionId, isCorrect) => {
    setSelectedOption(optionId);
    if (isCorrect) {
      setScore((prev) => prev + 4);
      setCorrectAnswers((prev) => prev + 1);
    } else {
      setScore((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
      navigate("/result", {
        state: {
          finalScore: score,
          correctAnswers,
          totalQuestions: questions.length,
        },
      });
    }
  };

  const handleTimeout = () => {
    if (selectedOption === null) {
      handleNext();
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md w-full">
        {quizCompleted ? (
          <p>Redirecting...</p>
        ) : (
          <>
            <Timer key={currentIndex} duration={15} onTimeout={handleTimeout} />
            <Question
              question={questions[currentIndex]}
              currentIndex={currentIndex}
              totalQuestions={questions.length}
              onAnswer={handleAnswer}
              selectedOption={selectedOption}
              onNext={handleNext}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
