import React, { useState, useEffect, useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

// Array of carousel items
const carouselItems = [
  'Infiny School Launches Two New Products: SkillUp and Engage',
  'SkillUp and Engage Read nowJoin us at the AI Skills & Tech Talent Summit in London!',
  'Register nowThe 2024 Developer Skills Report is here',
  'Read nowStream Infiny School AI Day',
  'featuring new innovations and industry thought leaders.',
];

function Navbar1() {
  // State to manage the current index of the carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ref to store the interval ID for controlled cleanup
  const intervalRef = useRef(null);

  // Function to handle right arrow click
  const handleRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to handle left arrow click
  const handleLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
  };

  // Effect to start the carousel interval and cleanup on unmount
  useEffect(() => {
    // Create the interval
    intervalRef.current = setInterval(() => {
      handleRight();
    }, 2000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(intervalRef.current);
  }, []); // Empty dependency array to run effect only once

  return (
    <div>
      <div className="bg-green-500 h-10 text-white hidden sm:block">
        {/* Carousel container */}
        <div className="lg:w-5/6 mx-auto flex justify-between pt-2">
          {/* Left arrow button */}
          <button onClick={handleLeft}>
            <FaAngleLeft />
          </button>
          {/* Carousel item */}
          <h1>{carouselItems[currentIndex]}</h1>
          {/* Right arrow button */}
          <button onClick={handleRight}>
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar1;
