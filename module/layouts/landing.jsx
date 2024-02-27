import React from "react";

import CSS from "@/module/styles/landing.module.css";

const { default: Navbar } = require("@/components/navbar");
const { default: Title } = require("@/components/landing/title");
const { default: ReadMore } = require("@/components/landing/readmore");

const LandingLayout = () => {
  return (
    <main>
      <div className={`${CSS.title}`}>
        <Navbar />
        <Title />
      </div>
      <ReadMore />
    </main>
  );
};

export default LandingLayout;
