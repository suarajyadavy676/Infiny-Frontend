import React from "react";
import { Route, Routes } from "react-router-dom";
import Body from "../components/mainBody/Body";
import SignUp from "./SignUp";
import Login from "./Login";
import PrivateRoute from "../components/PrivateRoute";
import AccessAccount from "../components/AccessAccount";
import DashBoard from "./for-developrs/DashBoard";
import DataStructure from "./for-developrs/data-structure/DataStructure";
import Python from "./for-developrs/python/Python";
import Page404 from "../components/Page404";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashBoard />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/access-account" element={<AccessAccount/>}/>
        <Route path="/dashboard/data-structures" element={<DataStructure/>}/>
        <Route path="/dashboard/python" element={<Python/>}/>
        <Route path="/*" element={<Page404/>}/>
      </Routes>
    </div>
  );
}

export default AllRoutes;