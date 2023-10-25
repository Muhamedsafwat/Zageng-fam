"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  return (
    <header className="flex py-3 items-center justify-between px-5 lg:px-20 bg-headerBg text-lg font-medium absolute top-0 z-50 w-full">
      <div className="flex items-center gap-5">
        <Link to="/" className="flex items-center gap-2">
          <div>
            <img src={logo} alt="logo" className="w-12" />
          </div>
          <h1 className="font-bold bg-gradient-to-br from-[#BE4C03] to-[#E76F00] bg-clip-text text-transparent capitalize">
            zag eng family
          </h1>
        </Link>
        {/* desktop navbar */}
        <nav className="gap-5 hidden lg:flex">
          <Link to="/about" className="hover:opacity-50 duration-300">
            About
          </Link>
          <Link to="/comittees" className="hover:opacity-50 duration-300">
            Comittees
          </Link>
        </nav>
      </div>
      <Link
        to="/join"
        className="hidden lg:block hover:brightness-110 duration-300"
      >
        <div className="bg-gradient-to-br from-[#BE4C03] to-[#E76F00] rounded-3xl px-6 py-2 text-white">
          Join us
        </div>
      </Link>
      {/* menu button for mobile drawer */}
      <button
        onClick={() => setDrawerVisible(!drawerVisible)}
        className={`ml-auto mr-3 w-5 h-5 z-10 lg:hidden ${
          drawerVisible ? "fixed right-5" : "relative"
        }`}
      >
        <div className="relative h-3 [&>*]:w-5 [&>*]:absolute [&>*]:h-[2px] [&>*]:bg-[#BE4C03] [&>*]:duration-200 flex flex-col gap-1">
          <div
            className={`${
              drawerVisible ? "rotate-[45deg] top-[50%] translate-y-[-50%]" : ""
            } top-0`}
          />
          <div
            className={`${
              drawerVisible ? "opacity-0" : "opacity-1"
            } top-[50%] translate-y-[-50%]`}
          />
          <div
            className={`${
              drawerVisible
                ? "rotate-[-45deg] top-[50%] translate-y-[-50%]"
                : ""
            } bottom-0 `}
          />
        </div>
      </button>
      {/* black layout when drawer is openend */}
      <div
        onClick={() => setDrawerVisible(false)}
        className={`fixed w-screen h-screen bg-black top-0 left-0 bg-opacity-50 duration-300 lg:hidden ${
          drawerVisible ? "opacity-1" : "opacity-0 pointer-events-none"
        }`}
      />
      {/* mobile nav bar (drawer) */}
      <nav
        className={`h-screen fixed top-0 lg:hidden bg-black text-white bg-opacity-60 backdrop-blur-sm right-0 duration-300 flex flex-col gap-4 px-10 py-16 ${
          drawerVisible ? "translate-x-0 w-[60vw]" : "translate-x-96 w-0"
        }`}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/comittees">Comittees</Link>
        <Link to="/join">Join Us</Link>
      </nav>
    </header>
  );
};

export default Header;
