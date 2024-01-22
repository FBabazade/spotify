import React from "react";
import { Icon } from "../../assets/icons";
import { NavLink } from "react-router-dom";
import Playlistler from "./Playlistler";

const Menu = () => {
  return (
    <nav>
      <div className="flex flex-col gap-2 ">
        <div className="flex flex-col py-2 px-3  bg-backdrop rounded-lg">
          {" "}
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `h-10 gap-x-5 transition-all flex items-center text-base font-bold text-link rounded hover:text-white px-3 py-1 ${
                isActive ? " text-white" : ""
              }`
            }
          >
            <span>
              <Icon name="home" size={24} />
            </span>
            Ana səhifə
          </NavLink>
          <NavLink
            to={"/search"}
            className={({ isActive }) =>
              `h-10 gap-x-5 transition-all flex items-center text-base font-bold text-link rounded hover:text-white px-3 py-1 ${
                isActive ? " text-white" : ""
              }`
            }
          >
            <Icon name="search" size={24} />
            Axtar
          </NavLink>
        </div>
        <div className="flex flex-col bg-backdrop rounded-lg">
          <div className="flex flex-row gap-2 items-center py-2 px-4">
            <div className="mr-auto">
              <button className=" h-10 gap-x-3  flex transition-all text-base px-2 py-0 items-center  font-bold text-link rounded hover:text-white">
                <Icon name="library" size={24} />
                Kitabxana
              </button>
            </div>
            <button className="block items-center justify-center rounded-full transition-all text-link hover:bg-iconhover hover:text-white p-2">
              <Icon name="plus" size={16} />
            </button>
            <button className="block items-center justify-center rounded-full transition-all text-link hover:bg-iconhover hover:text-white p-2">
              <Icon name="arrow" size={16} />
            </button>
          </div>

          <div className="flex items-center">
            <span className="font-semibold transition-all hover:bg-[#343434] text-sm rounded-xl  my-2 mx-4 bg-iconhover px-3 py-1">
              Playlistlər
            </span>
          </div>
          <Playlistler/>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
