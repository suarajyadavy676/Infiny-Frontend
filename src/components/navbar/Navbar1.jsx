import React, { useState,useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function Navbar1() {
  let arr = [
    "INFINY SCHOOL Launches Two New Products: SkillUp and Engage",
    "SkillUp and Engage Read nowJoin us at the AI Skills & Tech Talent Summit in London! ",
    "Register nowThe 2024 Developer Skills Report is here",
    "Read nowStream INFINY SCHOOOL AI Day",
    "featuring new innovations and industry thought leaders.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function handleRight() {
    setCurrentIndex(prevIndex => (prevIndex === arr.length - 1 ? 0 : prevIndex + 1));
  }

  function handleLeft() {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? arr.length - 1 : prevIndex - 1));
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === arr.length - 1 ? 0 : prevIndex + 1));
    }, 10000);

    return () => clearInterval(intervalId);
  }, [arr.length]);
  return (
    <div>
      <div className="bg-green-500 h-10 text-white hidden sm:block">
        <div className="lg:w-5/6 mx-auto flex justify-between pt-2">
          <button onClick={handleLeft}>
            <FaAngleLeft />
          </button>
          <h1>{arr[currentIndex]}</h1>
          <button onClick={handleRight}>
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar1;
