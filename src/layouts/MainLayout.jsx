import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-white">
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Main outlet */}
      <Outlet></Outlet>
      {/* Footer */}
    </div>
  );
};

export default MainLayout;
