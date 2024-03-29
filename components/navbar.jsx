"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const { default: Expand } = require("@/shared/icons/chevron-down-dark.svg");
const { default: ComponineIcon } = require("@/shared/icons/wind-01-colorized.svg");
const { default: DocumentationsIcon } = require("@/shared/icons/book-02-dark.svg");
const { default: ComponentsIcon } = require("@/shared/icons/compass-dark.svg");
const { default: PricingIcon } = require("@/shared/icons/coin-broken-dark.svg");
const { default: DeveloperIcon } = require("@/shared/icons/code-04-dark.svg");
const { default: ContactIcon } = require("@/shared/icons/phone-dark.svg");

const Context = {
  Introduction: "Introducing Componine",
  Description: "It is an Ode To the Artistry of React.js",
};

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => setExpand(!expand);

  useEffect(() => {
    const expandBreakpoints = window.innerWidth < 1024;
    setExpand(!expandBreakpoints);
  }, []);

  return (
    <nav
      className={`bg-transparent lg:hover:bg-opacity-10 border-b-0 lg:border-b lg:border-transparent backdrop-blur-none transition-all lg:hover:border-b lg:hover:border-b-white/10 lg:hover:backdrop-blur-lg flex flex-col lg:flex-row gap-4 lg:gap-0 w-full ${
        expand ? "h-screen lg:h-auto" : "h-auto"
      } h-auto px-8 py-8 lg:px-32 lg:py-4 items-center justify-between`}
    >
      <div className="flex flex-col lg:flex-row w-full lg:w-auto gap-4 lg:gap-2 items-start lg:items-center justify-start">
        <div className="flex lg:hidden flex-row w-full lg:w-auto gap-4 lg:gap-2 items-center justify-between">
          <Section
            icon={ComponineIcon}
            name={"Componine"}
            description={Context.Description}
          />
          <button
            onClick={handleExpand}
            className="bg-[#7A6254]/10 ring-1 ring-[#7A6254] transition-all hover:opacity-80 lg:hover:opacity-100 lg:hover:bg-[#7A6254]/20 flex flex-row gap-2 items-center w-auto rounded-none lg:rounded-full px-2 py-2 mt-0"
          >
            <Image
              src={Expand}
              className={`transition-all ${expand ? "rotate-180" : "rotate-0"}`}
              width="14"
              height="14"
            />
          </button>
        </div>
        <Notifications />
      </div>
      {expand && (
        <div className="flex flex-col lg:flex-row w-full lg:w-auto gap-4 lg:gap-2 items-start lg:items-center justify-end">
          <Section
            icon={DocumentationsIcon}
            name={"Documentations"}
            description={
              "Unlock the full potential of our React.js Components Library today. Happy coding!"
            }
          />
          <Section
            icon={ComponentsIcon}
            name={"Components"}
            description={"Discover the power of seamless component exploration. Navigating through our extensive React.js Components Library has never been more intuitive."}
          />
          <Section
            icon={PricingIcon}
            name={"Pricing"}
            description={"Transparent and flexible pricing plans tailored to suit your needs"}
          />
          <label className="bg-transparent hidden lg:flex flex-row gap-2 items-center w-full lg:w-auto rounded-none p-0 mt-0">
            <p className="text-[#7A6254]/20 font-medium text-xs tracking-tight leading-relaxed">
              |
            </p>
          </label>
          <Section
            icon={DeveloperIcon}
            name={"Developer"}
            description={"With years of experience under our belts, we bring a diverse range of skills and perspectives to the table, ensuring that our library meets the needs of developers at every level."}
          />
          <Section
            icon={ContactIcon}
            name={"Contact"}
            description={"Our contact page is the gateway to connecting with our team and getting the support you need."}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

const Notifications = () => {
  return (
    <button className="bg-[#E2A786]/10 ring-1 ring-[#E2A786] transition-all hover:opacity-80 lg:hover:opacity-100 lg:hover:bg-[#E2A786]/20 hidden lg:flex flex-row gap-2 items-center w-full lg:w-auto rounded-none lg:rounded-full px-4 py-2 mt-0">
      <Image src={ComponineIcon} width="14" height="14" />
      <p className="text-[#7A6254] font-medium text-xs tracking-tight leading-relaxed">
        <span className="font-bold">{Context.Introduction}</span> —{" "}
        <span className="text-[#7A6254]/80">{Context.Description}</span>
      </p>
    </button>
  );
};

const Section = ({ icon, name, description }) => {
  return (
    <button className="bg-transparent transition-all hover:opacity-80 lg:hover:opacity-100 lg:hover:bg-[#E2A786]/10 flex flex-col gap-2 items-center w-full lg:w-auto rounded-none lg:rounded-full p-0 lg:px-4 lg:py-2 mt-0">
      <div className="flex flex-row gap-2 items-center w-full lg:w-auto">
        <Image src={icon} className="flex lg:hidden" width="14" height="14" />
        <p className="text-[#7A6254] font-semibold lg:font-medium text-xs text-start lg:text-center tracking-tight leading-relaxed">
          {name}
        </p>
      </div>
      <div className="flex lg:hidden flex-row gap-2 items-center w-full lg:w-auto">
        <p className="text-[#7A6254]/80 font-medium text-xs text-start lg:text-center tracking-tight leading-relaxed">
          {description}
        </p>
      </div>
    </button>
  );
};
