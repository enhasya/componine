import React from "react";

import CSS from "@/module/styles/landing.module.css";

const { default: Navbar } = require("@/components/navbar");
const { default: Title } = require("@/components/landing/title");
const {
  default: Documentations,
} = require("@/components/landing/documentations");

const LandingLayout = () => {
  return (
    <main>
      <div className={`${CSS.title}`}>
        <Navbar />
        <Title />
      </div>
      <Documentations />
    </main>
  );
};

export default LandingLayout;
