import React from "react";

const Title = () => {
  return (
    <main className="bg-[#161619] flex flex-col w-full h-screen lg:h-auto p-8 lg:p-32 items-center justify-center">
      <h1 className="text-[#FFFFFF] font-semibold text-2xl lg:text-4xl tracking-tight leading-relaxed lg:leading-relaxed text-start lg:text-center w-full lg:w-[720px] mt-0">
        It is an Ode To the Artistry of React.js —{" "}
        <span className="text-[#E6F40B]">Componine</span>
      </h1>
      <h2 className="text-[#FFFFFF]/80 font-medium text-sm lg:text-lg tracking-tight leading-relaxed lg:leading-relaxed text-start lg:text-center w-full lg:w-[720px] mt-8 lg:mt-16">
        Designed with versatility and efficiency in mind, "Componine" is more
        than just another component library. It's a comprehensive toolkit
        crafted to empower developers like you to create stunning, responsive,
        and feature-rich UIs effortlessly.
      </h2>
    </main>
  );
};

export default Title;
