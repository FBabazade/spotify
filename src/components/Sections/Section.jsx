import React from "react";
import { NavLink } from "react-router-dom";
import Cards from "./Cards";

const Section = ({ title, more = false }) => {
  return (
    <section>
      <header className="flex items-center justify-between mb-4">
        <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline">
          {title}
        </h3>
        {more && <NavLink className={"text-xs font-semibold text-link hover:underline"} to={more}>See all</NavLink>}
      </header>
      <Cards/>
    </section>
  );
};

export default Section;
