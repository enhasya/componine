import React from "react";
import Image from "next/image";

import CSS from "@/module/styles/landing.module.css";

const { default: Documentations } = require("@/shared/icons/book-02-dark.svg");
const { default: FindComponents } = require("@/shared/icons/compass-dark.svg");
const { default: Support } = require("@/shared/icons/thumb-up-light.svg");

const App = {
  Subtitle: "It is an Ode To the Artistry of React.js",
  Title: "Componine",
  Description:
    "Ready to supercharge your development projects? Componine is here to revolutionize the way you build dynamic and engaging user interfaces.",
};

const Title = () => {
  return (
    <main className="flex flex-col w-full h-auto p-8 lg:p-32 items-start justify-center">
      <h3 className="text-[#161619]/80 font-medium text-lg lg:text-2xl tracking-tight leading-relaxed lg:leading-relaxed text-start w-full lg:w-[640px] mt-0">
        {App.Subtitle}
      </h3>
      <h1 className="text-[#F13F0C] font-semibold text-4xl lg:text-6xl tracking-tight leading-relaxed lg:leading-relaxed text-start w-full lg:w-[640px] mt-0">
        {App.Title}
      </h1>
      <h2 className="text-[#161619]/80 font-medium text-sm lg:text-lg tracking-tight leading-relaxed lg:leading-relaxed text-start w-full lg:w-[640px] mt-8 lg:mt-16">
        {App.Description}
      </h2>
      <div className="flex flex-row flex-wrap gap-4 w-full lg:w-[640px] h-auto items-center justify-start mt-8 lg:mt-16">
        <Context
          background={"bg-[#161619]/10"}
          backgroundhover={"hover:bg-[#161619]/20"}
          text={"text-[#161619]"}
          icon={Documentations}
          name={"Documentations"}
        />
        <Context
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

const Context = ({ background, backgroundhover, text, icon, name }) => {
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
