import React from "react";

const { default: Title } = require("@/components/title");
const { default: Navbar } = require("@/components/navbar");

const LandingLayout = () => {
  return (
    <main>
      <Navbar />
      <Title />
    </main>
  );
};

export default LandingLayout;
