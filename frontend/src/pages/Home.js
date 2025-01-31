import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white p-6">
      <div className="bg-gradient-to-r from-purple-600 via-blue-500 to-teal-500 p-8 rounded-xl shadow-2xl mb-8">
        <h1 className="text-3xl font-extrabold text-center text-white tracking-wider shadow-md p-6 rounded-lg bg-opacity-70">
          Welcome to the Ultimate Quiz Challenge
        </h1>
      </div>

      <Link to="/quiz">
        <button className="mt-8 px-10 py-5 bg-white text-blue-500 rounded-full text-2xl font-semibold transition-all transform hover:scale-110 hover:bg-blue-600 hover:text-white shadow-2xl focus:outline-none">
          Start Quiz
        </button>
      </Link>

      <footer className="mt-12 text-md text-gray-200 text-center">
        <p>Get ready to test your knowledge!</p>
      </footer>
    </div>
  );
};

export default Home;
