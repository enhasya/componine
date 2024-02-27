import React from "react";
import Image from "next/image";

const { default: Documentations } = require("@/shared/icons/book-02-dark.svg");
const { default: FindComponents } = require("@/shared/icons/compass-dark.svg");
const {
  default: ExploreNow,
} = require("@/shared/icons/down-arrow-colorized.svg");

const Context = {
  Subtitle: "Where Stability, Speed, and Value Converge. Meet.",
  Title: "Componine",
  Description:
    "Unlock the full potential of your React.js projects. The ultimate collection of meticulously crafted and highly customizable React components. Elevate your web development experience by integrating our components seamlessly into your applications, saving time and ensuring a polished, professional look.",
};

const Title = () => {
  return (
    <main className="flex flex-col w-full h-auto p-8 lg:p-32 items-start justify-center">
      <h2 className="text-[#161619]/80 font-medium text-lg lg:text-2xl tracking-tight leading-relaxed lg:leading-relaxed text-start w-full lg:w-[480px] mt-0">
        {Context.Subtitle}
      </h2>
      <h1 className="text-[#F13F0C] font-semibold text-4xl lg:text-6xl tracking-tight leading-relaxed lg:leading-relaxed text-start w-full lg:w-[480px] mt-0">
        {Context.Title}
      </h1>
      <h3 className="text-[#161619]/80 font-medium text-sm lg:text-lg tracking-tight leading-relaxed lg:leading-relaxed text-start w-full lg:w-[480px] mt-8 lg:mt-16">
        {Context.Description}{" "}
      </h3>
      <div className="flex flex-row flex-wrap gap-4 w-full lg:w-[640px] h-auto items-center justify-start mt-8 lg:mt-16">
        <Links
          background={"bg-[#F13F0C]/10"}
          backgroundhover={"hover:bg-[#F13F0C]/20"}
          text={"text-[#F13F0C]"}
          icon={ExploreNow}
          name={"Explore Now"}
        />
        <Links
          background={"bg-[#161619]/10"}
          backgroundhover={"hover:bg-[#161619]/20"}
          text={"text-[#161619]"}
          icon={Documentations}
          name={"Documentations"}
        />
        <Links
          background={"bg-[#161619]/10"}
          backgroundhover={"hover:bg-[#161619]/20"}
          text={"text-[#161619]"}
          icon={FindComponents}
          name={"Find Components"}
        />
      </div>
    </main>
  );
};

export default Title;

const Links = ({ background, backgroundhover, text, icon, name }) => {
  return (
    <button
      className={`${background} transition-all ${backgroundhover} flex flex-row gap-2 items-center w-auto rounded-full px-4 py-2 mt-0`}
    >
      <Image src={icon} width="16" height="16" />
      <p
        className={`hidden lg:flex ${text} font-medium text-sm tracking-tight leading-relaxed`}
      >
        {name}
      </p>
    </button>
  );
};
