import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Search from "../views/Search";
import "../style.css"

const Content = () => {
  return (
    <div className="flex-auto bg-backdrop rounded-lg overflow-hidden ">
      <Navbar />
      <div className="px-8 py-5 scroll-smooth max-h-screen" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
};

export default Content;
