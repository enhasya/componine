import React from "react";
import Image from "next/image";

const { default: DocumentationsIcon } = require("@/shared/icons/book-02-dark.svg");
const { default: FindComponentsIcon } = require("@/shared/icons/compass-dark.svg");
const {
  default: ExploreNowIcon,
} = require("@/shared/icons/down-arrow-colorized.svg");

const Context = {
  Title: "Componine",
  Description:
    "Unlock the full potential of your React.js projects. The ultimate collection of meticulously crafted and highly customizable React components. Elevate your web development experience by integrating our components seamlessly into your applications, saving time and ensuring a polished, professional look.",
};

const ReadMore = () => {
  return (
    <main className="bg-[#F8F8FF] flex flex-col w-full h-auto px-8 pt-0 pb-8 lg:p-32 items-start justify-center">
      <p className="text-[#F13F0C] font-semibold text-2xl lg:text-4xl tracking-tight leading-relaxed lg:leading-relaxed text-start w-full lg:w-[480px] mt-4 lg:mt-8">
        {Context.Title}<span className="text-[#161619]"> — React.js Components Library</span>
      </p>
      <p className="text-[#161619]/80 font-medium text-xs lg:text-base tracking-tight leading-relaxed lg:leading-relaxed text-start w-full lg:w-[640px] mt-4 lg:mt-8">
        {Context.Description}{" "}
      </p>
      <div className="flex flex-row flex-wrap gap-4 w-full lg:w-[640px] h-auto items-center justify-start mt-8 lg:mt-16">
        <Links
          background={"bg-[#F13F0C]/10"}
          backgroundhover={"hover:bg-[#F13F0C]/20"}
          ring={"ring-1 ring-[#F13F0C]"}
          text={"text-[#F13F0C]"}
          icon={ExploreNowIcon}
          name={"Explore Now"}
        />
        <Links
          background={"bg-[#161619]/10"}
          backgroundhover={"hover:bg-[#161619]/20"}
          text={"text-[#161619]"}
          icon={DocumentationsIcon}
          name={"Documentations"}
        />
        <Links
          background={"bg-[#161619]/10"}
          backgroundhover={"hover:bg-[#161619]/20"}
          text={"text-[#161619]"}
          icon={FindComponentsIcon}
          name={"Find Components"}
        />
      </div>
    </main>
  );
};

export default ReadMore;

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
