import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-white">
      <h1 className="text-3xl">Navbar</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
