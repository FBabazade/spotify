import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Search from "../views/Search";

const Content = () => {
  return (
    <div className="flex-auto bg-backdrop rounded-lg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default Content;
