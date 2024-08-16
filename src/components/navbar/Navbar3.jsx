import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import Products from './Products';
import Solutions from './Solutions';
import Resources from './Resources';

function Navbar3() {
  const [isFixed, setIsFixed] = useState(false);

  // Function to check if the user has scrolled past a certain point
  const handleScroll = () => {
    const position = window.scrollY;
    setIsFixed(position > 90); // Set isFixed to true when scrolled past 90px
  };

  // Add event listener for scroll event
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${isFixed ? 'fixed w-full top-0 left-0 bg-white shadow-lg' : 'relative'}`}>
      {/* Large screen navigation */}
      <div className="hidden lg:block">
        <div className="my-4 w-[95%] xl:w-5/6 mx-auto flex justify-between items-center text-md font-bold">
          {/* Uncomment and replace with actual logo */}
          {/* <Link to="/"><img src="./images/logo.png" alt="logo" width={170" /></Link> */}
          <h1 className="font-extrabold text-xl">
            <Link to="/">INFINY SCHOOL</Link>
          </h1>
          <div><Products /></div>
          <div><Solutions /></div>
          <div><Resources /></div>
          <div><Link to="#" className="hover:text-green-600">Pricing</Link></div>
          <div><Link to="/dashboard" className="hover:text-green-600">For developers</Link></div>
          <div><Link to="#">Request demo</Link></div>
          <button className="bg-green-700 px-4 py-2 rounded-md text-white">
            <Link to="/access-account">Sign Up</Link>
          </button>
        </div>
      </div>

      {/* Small and medium screen navigation */}
      <div className="w-[96%] mx-auto flex justify-between lg:hidden my-4 items-center">
        {/* Uncomment and replace with actual logo */}
        {/* <Link to="/"><img src="./images/logo.png" alt="logo" width={170" /></Link> */}
        <h1 className="font-extrabold text-xl">
          <Link to="/">INFINY SCHOOL</Link>
        </h1>
        <Hamburger />
      </div>
    </div>
  );
}

export default Navbar3;
