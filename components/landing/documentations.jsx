import React from "react";
import Image from "next/image";

const {
  default: DocumentationsIcon,
} = require("@/shared/icons/book-02-dark.svg");
const {
  default: FindComponentsIcon,
} = require("@/shared/icons/compass-dark.svg");
const {
  default: ExploreNowIcon,
} = require("@/shared/icons/down-arrow-colorized.svg");

const Context = {
  Title: "Documentations",
  Description:
    "A comprehensive React.js components library designed to streamline your web development process. Whether you're a seasoned developer or just starting with React, our library provides a collection of reusable and customizable UI components to enhance the aesthetics and functionality of your applications.",
};

const Documentations = () => {
  return (
    <main className="bg-[#F8F8FF] flex flex-col lg:flex-row w-full h-auto gap-8 lg:gap-16 px-8 pt-0 pb-8 lg:p-32 items-start justify-between">
      <div className="flex flex-col items-start justify-center w-full lg:w-[40%] h-auto p-0">
        <p className="text-[#E2A786] font-semibold text-2xl lg:text-4xl tracking-tight leading-relaxed lg:leading-relaxed text-start w-full mt-0">
          {Context.Title}
          <span className="text-[#7A6254]"></span>
        </p>
        <p className="text-[#7A6254] font-medium text-xs lg:text-base tracking-tight leading-relaxed lg:leading-relaxed text-start w-full mt-4 lg:mt-8">
          {Context.Description}{" "}
        </p>
        <div className="flex flex-row flex-wrap gap-4 w-full h-auto items-center justify-start mt-8 lg:mt-16">
          <Links
            background={"bg-[#E2A786]/10"}
            backgroundhover={"hover:bg-[#E2A786]/20"}
            ring={"ring-1 ring-[#E2A786]"}
            text={"text-[#E2A786]"}
            icon={ExploreNowIcon}
            name={"Explore Now"}
          />
          <Links
            background={"bg-[#7A6254]/10"}
            backgroundhover={"hover:bg-[#7A6254]/20"}
            text={"text-[#7A6254]"}
            icon={DocumentationsIcon}
            name={"Documentations"}
          />
          <Links
            background={"bg-[#7A6254]/10"}
            backgroundhover={"hover:bg-[#7A6254]/20"}
            text={"text-[#7A6254]"}
            icon={FindComponentsIcon}
            name={"Find Components"}
          />
        </div>
      </div>
      <div className="bg-slate-100 flex flex-col items-start justify-center w-full lg:w-[40%] h-auto p-8 rounded-lg drop-shadow-lg">
        <p className="text-[#E2A786] font-semibold text-lg lg:text-2xl tracking-tight leading-relaxed lg:leading-relaxed text-start w-full mt-0">
          Cart
          <span className="text-[#7A6254]"></span>
        </p>
        <p className="text-[#7A6254]/80 font-medium text-xs lg:text-base tracking-tight leading-relaxed lg:leading-relaxed text-start w-full mt-4 lg:mt-8">
          {Context.Description}{" "}
        </p>
        <div className="flex flex-row flex-wrap gap-4 w-full h-auto items-center justify-start mt-8 lg:mt-16">
          <Links
            background={"bg-[#E2A786]/10"}
            backgroundhover={"hover:bg-[#E2A786]/20"}
            ring={"ring-1 ring-[#E2A786]"}
            text={"text-[#E2A786]"}
            icon={ExploreNowIcon}
            name={"Explore Now"}
          />
          <Links
            background={"bg-[#7A6254]/10"}
            backgroundhover={"hover:bg-[#7A6254]/20"}
            text={"text-[#7A6254]"}
            icon={DocumentationsIcon}
            name={"Documentations"}
          />
          <Links
            background={"bg-[#7A6254]/10"}
            backgroundhover={"hover:bg-[#7A6254]/20"}
            text={"text-[#7A6254]"}
            icon={FindComponentsIcon}
            name={"Find Components"}
          />
        </div>
      </div>
    </main>
  );
};

export default Documentations;

const Links = ({ background, backgroundhover, ring, text, icon, name }) => {
  return (
    <button
      className={`${background} transition-all ${backgroundhover} ${ring} flex flex-row gap-2 items-center w-auto rounded-full px-4 py-2 mt-0`}
    >
      <Image src={icon} width="16" height="16" />
      <p
        className={`hidden lg:flex ${text} font-medium text-xs tracking-tight leading-relaxed`}
      >
        {name}
      </p>
    </button>
  );
};
