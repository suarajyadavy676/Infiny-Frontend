import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import DevDrawer from "./DevDrawer";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import NavManu from "./NavManu";

function DNavbar() {
  return (
    <div className="bg-black">
      <div className="hidden lg:block">
        <div className="flex justify-between   text-white py-4 w-[90%] mx-auto">
          <div className="grid grid-cols-5 gap-3">
            <p className="text-xl shrink font-extrabold hover:underline hover:underline-offset-[16px] hover:decoration-green-500">
              <Link to="#">INFINY SCHOOL</Link>
            </p>
            <p className="text-center hover:underline hover:underline-offset-[16px] hover:decoration-green-500 ">
              <Link to="#">Prepare</Link>
            </p>
            <p className="hover:underline hover:underline-offset-[16px] hover:decoration-green-500">
              <Link to="#">Certify</Link>
            </p>
            <p className="hover:underline hover:underline-offset-[16px] hover:decoration-green-500">
              <Link to="#">Compete</Link>
            </p>
            <p className="hover:underline hover:underline-offset-[16px] hover:decoration-green-500">
              <Link to="#">Apply</Link>
            </p>
          </div>
          <div className="grid grid-cols-2 justify-around gap-5">
            <div className="relative text-white">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 placeholder-white bg-slate-800 py-1"
              />
              <CiSearch className="absolute left-0 top-1 text-2xl rounded-md" />
            </div>

            {/* user icons */}
            <div className="text-center cursor-pointer">
            <NavManu/>
             
            </div>
          </div>
        </div>
      </div>

      {/* for small devices */}
      <div className="w-[95%] mx-auto text-white flex justify-between flex-wrap lg:hidden py-6">
        <DevDrawer />
        <p className="text-xl font-extrabold">INFINY SCHOOL</p>
        <div className="flex">
          <FiMessageSquare className="mx-2 text-2xl" />
          <IoIosNotificationsOutline className="mx-2 text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default DNavbar;
