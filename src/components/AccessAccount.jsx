import React from "react";
import { useNavigate } from "react-router-dom";

function AccessAccount() {
  const navigate = useNavigate()
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-between text-center my-32">
      <div>
        <span className="text-white bg-green-500 text-sm py-1 px-4 my-4">BUSINESS</span>
        <p className="text-3xl my-4">For <span className="text-green-500">Companies</span></p>
        <p className="lg:w-[70%] mx-auto text-lg mb-4">
          We are the market–leading technical interview platform to identify and
          hire developers with the right skills.
        </p>
        <button className="bg-green-500 text-lg text-white px-14 py-2 mb-4">Login</button>
        <p className="text-lg">Don't have an account?</p>
        <p className="text-lg"><span className="font-bold">Contact sales</span> or <span className="font-bold">Get free trial</span>.</p>
      </div>

      <div className="mt-14 lg:my-0">
        <p className="text-3xl my-4">For <span className="text-green-500">Developers</span></p>
        <p className="lg:w-[70%] mx-auto my-4 text-lg">
          Join over 21 million developers, practice coding skills, prepare for
          interviews, and get hired.
        </p>
        <button onClick={()=>navigate('/login')} className="border-2 py-2 px-14 border-solid text-lg">Login</button>
        <p className="text-lg">Don't have an account?</p>
        <button onClick={()=>navigate('/register')} className="font-bold hover:underline hover:underline-offset-4 decoration-solid text-lg" >Sign up.</button>
      </div>
    </div>
  );
}

export default AccessAccount;
