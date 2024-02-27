import React from "react";

import CSS from "@/module/styles/landing.module.css";

const { default: Title } = require("@/components/landing/title");
const { default: Navbar } = require("@/components/navbar");

const LandingLayout = () => {
  return (
    <main className={`${CSS.title}`}>
      <Navbar />
      <Title />
    </main>
  );
};

export default LandingLayout;
