import React from "react";
import Image from "next/image";

const { default: Upcoming } = require("@/shared/icons/wind-01-colorized.svg");

const Context = {
  Introduction: "Introducing Componine",
  Description: "It is an Ode To the Artistry of React.js",
};

const Navbar = () => {
  return (
    <nav className="bg-[#F8F8FF] lg:bg-transparent lg:hover:bg-opacity-10 border-b-0 lg:border-b lg:border-transparent backdrop-blur-none transition-all lg:hover:border-b lg:hover:border-b-white/10 lg:hover:backdrop-blur-lg flex flex-col lg:flex-row gap-4 lg:gap-0 w-full h-auto px-8 py-8 pb-0 lg:px-32 lg:py-4 items-center justify-between">
      <div className="flex flex-col lg:flex-row w-full lg:w-auto gap-4 lg:gap-2 items-start lg:items-center justify-start">
        <Notifications />
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:w-auto gap-4 lg:gap-2 items-start lg:items-center justify-end">
        <Section name={"Components"} />
        <Section name={"Pricing"} />
        <label className="bg-transparent hidden lg:flex flex-row gap-2 items-center w-full lg:w-auto rounded-none p-0 mt-0">
          <p className="text-[#161619]/20 font-medium text-xs tracking-tight leading-relaxed">
            |
          </p>
        </label>
        <Section name={"Developer"} />
        <Section name={"Contact"} />
      </div>
    </nav>
  );
};

export default Navbar;

const Notifications = () => {
  return (
    <button className="bg-[#F13F0C]/10 ring-1 ring-[#F13F0C] transition-all hover:opacity-80 lg:hover:opacity-100 lg:hover:bg-[#F13F0C]/20 flex flex-row gap-2 items-center w-full lg:w-auto rounded-none lg:rounded-full px-4 py-2 mt-0">
      <Image src={Upcoming} width="14" height="14" />
      <p className="text-[#161619] font-medium text-xs tracking-tight leading-relaxed">
        <span className="font-bold">{Context.Introduction}</span> —{" "}
        <span className="text-[#161619]/80">{Context.Description}</span>
      </p>
    </button>
  );
};

const Section = ({ name }) => {
  return (
    <button className="bg-transparent transition-all hover:opacity-80 lg:hover:opacity-100 lg:hover:bg-black/10 flex flex-row gap-2 items-center w-full lg:w-auto rounded-none lg:rounded-full p-0 lg:px-4 lg:py-2 mt-0">
      <p className="text-[#161619] font-medium text-xs tracking-tight leading-relaxed">
        {name}
      </p>
    </button>
  );
};
