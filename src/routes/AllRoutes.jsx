import React from "react";
import { Route, Routes } from "react-router-dom";
import Content from "./for-developrs/Content";
import Body from "../components/mainBody/Body";
import SignUp from "./SignUp";
import Login from "./Login";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/dashboard" element={<Content/>} />
        <Route path="/register" element={<SignUp/>} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default AllRoutes;
