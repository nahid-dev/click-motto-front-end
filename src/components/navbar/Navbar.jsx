import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ContainerOne from "../containerOne/ContainerOne";
import Hamburger from "hamburger-react";
import { PiImageBold } from "react-icons/pi";
import SubMenu from "../subMenu/SubMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = false;

  // Navbar Items
  const navItem = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "default")}
          to="/"
        >
          Explore
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "default")}
          to="/discover"
        >
          Discover
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "default")}
          to="/forProfessional"
        >
          For Professionals
        </NavLink>
      </li>
      {/* Visible in Mobile hidden in desktop */}
      <li className="md:hidden">
        <Link className="text-gray-400">About Click Motto</Link>
      </li>
      <li className="md:hidden">
        <Link className="text-gray-400">Pricing</Link>
      </li>
      <li className="md:hidden">
        <Link className="text-gray-400">License</Link>
      </li>
      <li className="md:hidden">
        <Link className="text-gray-400">Partnership</Link>
      </li>
      <li className="md:hidden">
        <Link className="text-gray-400">Blog</Link>
      </li>
      <li className="md:hidden">
        <Link className="text-gray-400">Help</Link>
      </li>
      <li className="md:hidden">
        <Link className="text-gray-400">Join The Team</Link>
      </li>
      {/* ======================= */}

      <li>
        <SubMenu></SubMenu>
      </li>

      <li>
        <Link className=" text-gray-400 border-2  rounded-md px-3 py-1" to="">
          Submit Photos
        </Link>
      </li>
      <li className="md:block hidden">
        <span className="w-[1px] h-[30px] block bg-gray-400"></span>
      </li>
      {user ? (
        <li className="font-semibold md:text-lg bg-[#ff084e] text-white rounded px-2">
          <Link to="">Logout</Link>
        </li>
      ) : (
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "default")}
            to="/login"
          >
            Login
          </NavLink>
        </li>
      )}
      {user || (
        <li>
          <Link className="primary-bg py-1 px-3 rounded-md" to="/joinFree">
            Join Free
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div className="shadow py-3 fixed top-0 z-50 bg-white w-full">
      <ContainerOne>
        {/* NAVBAR START */}
        <nav className="">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/" className="flex items-center primary-color">
                <PiImageBold size={34}></PiImageBold>
                <span className="font-extrabold uppercase text-xl">
                  click motto
                </span>
              </Link>
            </div>
            <div>
              <ul className="md:flex items-center hidden space-x-6">
                {/* NAVBAR ITEM LIST HERE */}
                {navItem}
              </ul>

              {/* MOBILE NAVBAR */}
              <div className="md:hidden">
                <div>
                  <span onClick={() => setIsOpen(!isOpen)}>
                    <Hamburger size={22}></Hamburger>
                  </span>
                </div>
                <div>
                  <ul
                    className={`absolute top-[72px] shadow  w-2/3  px-5 py-5 text-center space-y-2  h-screen transition-all duration-300 bg-white z-50 ${
                      isOpen ? "left-0" : "-left-[527px]"
                    }`}
                  >
                    {navItem}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </ContainerOne>
    </div>
  );
};

export default Navbar;
