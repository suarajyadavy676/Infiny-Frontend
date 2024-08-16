import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Element, scroller } from 'react-scroll';
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/react";
import DataStructure from "./data-structure/DataStructure";

function DashBoard() {
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  useEffect(() => {}, []);

  return (
    <div className="mt-90 text-black  mt-8">
      <div className="bg-white w-[90%] mx-auto">
        <p className="text-sm font-light">Prepare</p>
        <div className="flex justify-between flex-wrap">
          <h1 className="font-bold text-2xl my-2">Learn programming skills</h1>
          <p className="my-2">Bookmarked Challenges</p>
        </div>
      </div>

      <div className="bg-blue-50 mt-10">
        <div className="w-[90%] mx-auto ">
          <h2 className="pt-10 text-lg font-bold">Your Preparation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-6">
            <div className="bg-white shadow-lg rounded-lg py-4 pl-6">
              <p className="text-sm font-light">PREPARATION KITS</p>
              <p className="font-bold text-xl my-4">Interview Preparation Kit</p>
              <p className="text-sm font-light">Get interview ready for top companies by solvingan interview preparation kit.</p>
          <button className="bg-green-700 text-white rounded-md px-4 py-2 my-4">View all kits</button>
            </div>
            <div className="bg-white shadow-lg rounded-lg py-4 pl-6">
              <p className="text-sm font-light">NEW SKILL</p>
              <p className="font-bold text-xl my-4">Add your first skill</p>
              <p className="text-sm font-light">Explore and add your first skill to get started. HackerRank offers a variety of skills, tracks and tutorials for you to learn and improve.</p>
          <button onClick={() => scrollToSection('skills')} className="border-[1px] border-black rounded-md px-4 py-2 my-4">Explore Skills</button>
            </div>
          </div>
          <h2 className="pt-10 text-lg font-bold">Certification</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-lg">
            <div className="bg-white shadow-lg md:w-[350px] rounded-md pl-10 mt-4">
              <p className="pt-8">
                Problem Solving (Basic)
                <Tooltip
                  hasArrow
                  label={`It covers basic topics of Data Structures (such as Arrays, Strings) and Algorithms (such as Sorting and Searching).View details in Skills Directory`}
                  aria-label="A tooltip"
                >
                  <QuestionOutlineIcon className="ml-2" />
                </Tooltip>
              </p>
              <button className="border-[1px] rounded-md border-black py-1 px-2 my-10">
                Get Certified
              </button>
            </div>
            <div className="bg-white shadow-lg md:w-[350px] rounded-md pl-10 mt-4">
              <p className="pt-8">
                Python (Basic)
                <Tooltip
                  hasArrow
                  label={`It covers basic topics of Data Structures (such as Arrays, Strings) and Algorithms (such as Sorting and Searching).View details in Skills Directory`}
                  aria-label="A tooltip"
                >
                  <QuestionOutlineIcon className="ml-2" />
                </Tooltip>
              </p>
              <button className="border-[1px] rounded-md border-black py-1 px-2 my-10">
                Get Certified
              </button>
            </div>
            <div className="bg-black text-white shadow-lg md:w-[350px] rounded-md pl-10 mt-4">
              <p className="pt-8 text-bold">Stand out from the crowd</p>
              <p className="text-sm mt-2 pr-2">
                Take the Infiny School Certification Test and make your profile
                stand out
              </p>
              <button className="border-[1px] rounded-md border-white py-1 px-2 my-4">
                View all certifications
              </button>
            </div>
          </div>

          <h2 className="pt-32 text-lg font-bold" name="skills">Prepare By Topics</h2>
          <div className="bg-white text-black grid grid-cols-1 md:grid-cols-3 pl-10 mt-4 py-4 rounded-lg shadow-lg">
            <p className="py-3 text-lg hover:font-bold">
              <Link to="#">Algorithms</Link>{" "}
            </p>
            <p className="py-3 text-lg hover:font-bold">
              <Link to="/dashboard/data-structures">Data Structures</Link>{" "}
            </p>
            <p className="py-3 text-lg hover:font-bold">
              <Link to="#">Mathematics</Link>{" "}
            </p>
            <p className="py-3 text-lg hover:font-bold">
              <Link to="#">Artificial Intelligence</Link>{" "}
            </p>
            <p className="py-3 text-lg hover:font-bold">
              <Link to="#">C</Link>{" "}
            </p>
            <p className="py-3 text-lg hover:font-bold">
              <Link to="#">C++</Link>{" "}
            </p>
            <p className="py-3 text-lg hover:font-bold">
              <Link to="#">Java</Link>{" "}
            </p>
            <p className="py-3 text-lg hover:font-bold">
              <Link to="/dashboard/python">Python</Link>{" "}
            </p>
            <p className="py-3 text-lg hover:font-bold">
              <Link to="#">Ruby</Link>{" "}
            </p>
            <p className="py-3 text-lg hover:font-bold">
              <Link to="#">SQL</Link>{" "}
            </p>
            <p className="py-3 text-lg hover:font-bold">
              <Link to="#">Databases</Link>
            </p>
            <p className="py-3 text-lg hover:font-bold">
              <Link to="#">Linux Shell</Link>{" "}
            </p>
            <p className="py-3 text-lg hover:font-bold">
              <Link to="#">Functional Programming</Link>{" "}
            </p>
            <p className="py-3 text-lg hover:font-bold">
              <Link to="#">Regex</Link>{" "}
            </p>
          </div>
          <h2 className="pt-10 text-lg font-bold">
            Preparation Kits
            <span className="text-blue-400 hover:underline font-normal ml-12">
              <Link to="#">View all kits</Link>{" "}
            </span>
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white shadow-lg rounded-lg py-5 pl-4">
              <p className="font-bold my-2">1 Week Preparation Kit</p>
              <p className="my-4">Challenges: 21, Attempts: 867293, Mock Tests: 6</p>
              <p className="my-4">
                <span className="bg-gray-100 px-2 mr-2">Problem Solving(Basic)</span>{" "}
                <span className="bg-gray-100 px-2 mr-6">Problem Solving(InterMediate)</span> +1
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg py-5 pl-4">
              <p className="font-bold my-2">1 Month Preparation Kit</p>
              <p className="my-4">Challenges: 54, Attempts: 406970, Mock Tests: 4</p>
              <p className="my-4">
                <span className="bg-gray-100 px-2 mr-2">Problem Solving(Basic)</span>{" "}
                <span className="bg-gray-100 px-2 mr-6">Problem Solving(InterMediate)</span> +1
              </p>
            </div>
          </div>
        </div>
      </div>
      <DataStructure/>
    </div>
  );
}

export default DashBoard;
