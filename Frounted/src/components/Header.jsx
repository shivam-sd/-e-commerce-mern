import React from "react";
import logo from "../assets/logo.webp";
import {Link} from "react-router-dom"
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-16 shadow-md">
      <div className=" container mx-auto flex items-center justify-between h-full lg:p-2 md:p-2 p-2">
        <div className="logo">
          <Link to="/"><img
            src={logo}
            alt="Logo"
            loading="lazy"
            className="lg:w-24 md:w-24 w-16"
          /></Link>
        </div>
        <div className="hidden lg:flex items-center">
          <input
            type="text"
            placeholder="Search Here"
            className="border-2 border-red-300 w-80 h-10 outline-none focus-within:shadow-xl p-2 text-md rounded-l-full"
          />
          <div className="bg-red-700 w-10 h-10 p-1 rounded-r-full flex items-center justify-between cursor-pointer">
            <IoSearchSharp className="text-white text-xl" />
          </div>
        </div>
        <div className="icons flex lg:gap-6 gap-4">
          <div className="user text-3xl cursor-pointer">
            <FaRegUserCircle />
          </div>
          <div className="cards text-3xl relative cursor-pointer">
            <span><FaShoppingCart /></span>
            <div className="text-sm text-white flex items-center justify-center absolute -top-1 right-0 rounded-full"><span className="bg-red-500 rounded-full">0</span></div>
          </div>
          <div className="login">
            <Link to="/login-option" className="bg-blue-600 p-1 text-lg rounded-md text-white cursor-pointer font-bold duration-300 hover:bg-blue-500">Login</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
