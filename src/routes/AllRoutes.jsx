import React from "react";
import { Route, Routes } from "react-router-dom";
import Content from "./for-developrs/Content";
import Body from "../components/mainBody/Body";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/dashboard" element={<Content/>} />
        <Route path="/login" element={<Body />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
