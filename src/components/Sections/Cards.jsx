import React from "react";
import { NavLink } from "react-router-dom";

import items from "../../service/data";
import { Icon } from "../../assets/icons";

const Cards = () => {
  return (
    <div className="grid grid-cols-6 gap-x-6">
      {items.map((item) => (
        <NavLink
          to="/"
          key={item.id}
          className={
            "bg-black2 rounded  p-4 hover:bg-iconhover transition-all group"
          }
        >
          <div className="relative">
            <img
              className={`object-cover mb-4 shadow-2xl ${
                item.type === "artist" ? "rounded-full " : "rounded"
              }`}
              src={item.img}
              alt="img"
            />
            <button className="w-10 h-10 rounded-full hidden group-hover:flex group-focus:flex items-center justify-center text-black shadow-lg bg-primary absolute bottom-2 right-2">
              <Icon name="play" size={24} />
            </button>
          </div>
          <h6 className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-semibold">
            {item.title}
          </h6>
          <p className="text-link whitespace-normal mt-1 overflow-hidden text-ellipsis line-clamp-2">
            {item.desc}
          </p>
        </NavLink>
      ))}
    </div>
  );
};

export default Cards;
