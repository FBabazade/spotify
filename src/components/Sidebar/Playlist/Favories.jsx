import React from 'react'
import heart from "../../../assets/img/heart.png";
import { Icon } from "../../../assets/icons";

const Favories = () => {
  return (
    <div className="flex flex-row items-center gap-2 p-2 rounded hover:bg-iconhover">
    <span>
      <img src={heart} alt="Heart" className="w-12 h-12 rounded" />
    </span>
    <div>
      <p className="font-bold text-base text-primary">Bəyənilən musiqilər</p>
      <div className="flex flex-row gap-0.5 items-center">
        <span className="mr-1 text-primary">
          <Icon name="pin" size={12} />
        </span>
        <p>Seçilen • 52 mahnı</p>
      </div>
    </div>
  </div>
  )
}

export default Favories