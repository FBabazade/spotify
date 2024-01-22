import React from "react";
import { Icon } from "../../../assets/icons";


const List = ({title,songs}) => {
  return (
    <>
      <div className="flex flex-row items-center gap-2 p-2 rounded hover:bg-iconhover">
        <span className="text-link flex items-center justify-center rounded bg-iconhover p-3">
          <Icon name="music" size={24} />
        </span>
        <div>
          <p className="font-bold text-base text-white">{title}</p>
          <div className="flex items-center">
            <p>{songs}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
