import React from "react";
import { NavLink } from "react-router-dom";
import Cards from "./Cards";
import items from "../../service/data";

const Section = ({ title, more = false }) => {
  return (
    <section>
      <header className="flex items-center justify-between mb-4">
        <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline">
          {title}
        </h3>
        {more && <NavLink className={"text-xs font-semibold text-link hover:underline"} to={more}>See all</NavLink>}
      </header>
      <div className="grid grid-cols-6 gap-x-6"> {items.map(item => <Cards item={item} key={item.id}/> )}</div>
    </section>
  );
};

export default Section;
