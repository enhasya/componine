import React from "react";
import Image from "next/image";

import CSS from "@/module/styles/landing.module.css"

const {
  default: Documentations,
} = require("@/shared/icons/book-02-white.svg");
const {
  default: FindComponents,
} = require("@/shared/icons/compass-white.svg");

const Title = () => {
  return (
    <main className={`${CSS.title} flex flex-col w-full h-auto lg:h-[640px] p-8 lg:p-32 items-center justify-center`}>
      <h1 className="text-[#FFFFFF] font-semibold text-2xl lg:text-4xl tracking-tight leading-relaxed lg:leading-relaxed text-start lg:text-center w-full lg:w-[720px] mt-0">
        It is an Ode To the Artistry of React.js —{" "}
        <span className="text-[#E6F40B]">Componine</span>
      </h1>
      <h2 className="text-[#FFFFFF]/80 font-medium text-sm lg:text-lg tracking-tight leading-relaxed lg:leading-relaxed text-start lg:text-center w-full lg:w-[720px] mt-8 lg:mt-16">
        Ready to supercharge your development projects? "Componine" is here to
        revolutionize the way you build dynamic and engaging user interfaces.
      </h2>
      <div className="flex flex-row flex-wrap gap-4 w-full h-auto items-center justify-center mt-8 lg:mt-16">
        <button className="bg-white/10 transition-all hover:bg-white/20 flex flex-row gap-2 items-center w-full lg:w-auto rounded-full px-4 py-2 mt-0">
          <Image src={Documentations} width="16" height="16" />
          <p className="text-[#FFFFFF]/80 font-medium text-sm tracking-tight leading-relaxed">
            Documentations
          </p>
        </button>
        <button className="bg-white/10 transition-all hover:bg-white/20 flex flex-row gap-2 items-center w-full lg:w-auto rounded-full px-4 py-2 mt-0">
          <Image src={FindComponents} width="16" height="16" />
          <p className="text-[#FFFFFF]/80 font-medium text-sm tracking-tight leading-relaxed">
            Find Components
          </p>
        </button>
      </div>
    </main>
  );
};

export default Title;
