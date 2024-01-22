import React from "react";
import Navigation from "./Navbar/Navigation";
import User from "./Navbar/User";
import { Icon } from "../assets/icons";

const Navbar = () => {
  return (
    <div className="h-16 py-4 px-6 flex justify-between items-center">
      <Navigation />
      <div className="flex gap-2">
        <div className="bg-black rounded-full flex items-center w-8 h-8 justify-center">
          <Icon name="notification" size={16} />
        </div>
        <User />
      </div>
    </div>
  );
};

export default Navbar;
