import React from "react";
import { Icon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row gap-2">
      <button
        onClick={() => navigate(-1)}
        className="h-8 p-2 bg-black rounded-full"
      >
        <Icon name="left" size={16} />
      </button>
      <button
        onClick={() => navigate(1)}
        className="h-8 p-2 bg-black rounded-full"
      >
        <Icon name="right" size={16} />
      </button>
    </div>
  );
};

export default Navigation;
