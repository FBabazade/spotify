import React from "react";
import { NavLink } from "react-router-dom";

import { Icon } from "../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "../../stores/player";

const Cards = ({ item }) => {
  const dispatch = useDispatch();
  
  const { current } = useSelector((state) => state.player);
  const updateCurrent = () => {
    dispatch(setCurrent(item));
  };


  return (
    <>
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
          <button
            onClick={updateCurrent}
            className="w-10 h-10 rounded-full hidden group-hover:flex group-focus:flex items-center justify-center text-black shadow-lg bg-primary absolute bottom-2 right-2"
          >
            <Icon name={current?.id === item.id ? "pause" : "play"} size={24} />
          </button>
        </div>
        <h6 className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-semibold">
          {item.title}
        </h6>
        <p className="text-link whitespace-normal mt-1 overflow-hidden text-ellipsis line-clamp-2">
          {item.desc}
        </p>
      </NavLink>
    </>
  );
};

export default Cards;
