import React from "react";

import CSS from "@/module/styles/landing.module.css";

const { default: Title } = require("@/components/landing/title");
const { default: Navbar } = require("@/components/navbar");

const LandingLayout = () => {
  return (
    <main>
      <div className={`${CSS.title}`}>
        <Navbar />
        <Title />
      </div>
    </main>
  );
};

export default LandingLayout;
