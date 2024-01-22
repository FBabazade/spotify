import React from 'react'
import { Icon } from '../../../assets/icons'

const Header = () => {
  return (
    <div>  <header className="flex flex-row items-center justify-between pt-0.5 px-2">
    <div className="block items-center justify-center rounded-full transition-all text-link hover:bg-iconhover hover:text-white p-2">
      <Icon name="search" size={16} />
    </div>
    <button className=" flex flex-row items-center py-1 pl-4 pr-3  text-link text-sm font-bold    hover:scale-105 hover:text-white">
      <span>Yeni əlavələr</span>
      <span className="ml-[5px]">
        <Icon name="bar" size={16} />
      </span>
    </button>
  </header></div>
  )
}

export default Header