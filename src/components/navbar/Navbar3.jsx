import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Hamburger from "./Hamburger";
import Products from "./Products";
import Solutions from "./Solutions";
import Resources from "./Resources";

function Navbar3() {
  const [isFixed, setIsFixed] = useState(false);

  // Function to check the scroll position
  const handleScroll = () => {
    const position = window.scrollY;
    setIsFixed(position > 90); // Fixed when not at the top
  };

  // Set up event listener for scrolling
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`${isFixed ? 'fixed w-full top-0 left-0 bg-white shadow-lg' : 'relative'}`}>
      {/* lg screen */}
      <div className={`hidden lg:block `}>
        <div className="my-4 w-[95%] xl:w-5/6 mx-auto flex justify-between items-center text-md font-bold">
        {/* <Link to="/"><img src="./images/logo.png" alt="logo" width={170} /></Link>         */}
        <h1 className="font-extrabold text-xl"> <Link to="/">INFINY SCHOOL</Link></h1>
          <p><Link to="#"><Products/></Link></p>
          <p><Link to="#"><Solutions/></Link></p>
          <p><Link to="#"><Resources/></Link></p>
          <p><Link to="#" className="hover:text-green-600">Pricing</Link></p>
          <p><Link to="/dashboard" className="hover:text-green-600">For developers</Link></p>
          <p><Link to="#">Request demo</Link></p>
          <button className="bg-green-700 px-4 py-2 rounded-md text-white">
            <Link to="/access-account">Sign Up</Link>
          </button>
        </div>
      </div>
      {/* medium to small */}
      <div className="w-[96%] mx-auto flex justify-between lg:hidden my-4 items-center">
      {/* <Link to="/"><img src="./images/logo.png" alt="logo" width={170} /></Link>       */}
      <h1 className="font-extrabold text-xl"> <Link to="/">INFINY SCHOOL</Link></h1>
        <Hamburger/>
      </div>
    </div>
  );
}

export default Navbar3;
