import React from "react";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080?nature')" }}
    >
      <div className="max-w-md mx-auto text-center bg-white bg-opacity-90 p-8 rounded-lg shadow-lg mb-24">
        <div className="text-9xl font-bold text-indigo-600 mb-4">404</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for seems to have gone on a little adventure.
          Don't worry, we'll help you find your way back home.
        </p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-400 transition-colors duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default Page404;