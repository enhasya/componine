import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#161619] flex flex-col lg:flex-row gap-4 lg:gap-0 w-full h-auto p-8 lg:px-6 lg:pt-6 lg:pb-0 items-center justify-between">
      <div className="flex flex-col lg:flex-row w-full lg:w-auto gap-4 lg:gap-0 items-start lg:items-center justify-start">
        <button className="bg-transparent transition-all lg:hover:bg-black/20 flex flex-row gap-2 items-center w-full lg:w-auto rounded-none lg:rounded-full px-4 py-2 mt-0">
          <p className="text-[#FFFFFF]/80 font-bold text-sm tracking-tight leading-relaxed">
            Componine
          </p>
        </button>
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:w-auto gap-4 lg:gap-0 items-start lg:items-center justify-end">
        <button className="bg-transparent transition-all lg:hover:bg-black/20 flex flex-row gap-2 items-center w-full lg:w-auto rounded-none lg:rounded-full px-4 py-2 mt-0">
          <p className="text-[#FFFFFF]/80 font-medium text-sm tracking-tight leading-relaxed">
            Components
          </p>
        </button>
        <button className="bg-transparent transition-all lg:hover:bg-black/20 flex flex-row gap-2 items-center w-full lg:w-auto rounded-none lg:rounded-full px-4 py-2 mt-0">
          <p className="text-[#FFFFFF]/80 font-medium text-sm tracking-tight leading-relaxed">
            Pricing
          </p>
        </button>
        <label className="bg-transparent hidden lg:flex flex-row gap-2 items-center w-full lg:w-auto rounded-none px-4 py-2 mt-0">
          <p className="text-[#FFFFFF]/20 font-medium text-sm tracking-tight leading-relaxed">
            |
          </p>
        </label>
        <button className="bg-transparent transition-all lg:hover:bg-black/20 flex flex-row gap-2 items-center w-full lg:w-auto rounded-none lg:rounded-full px-4 py-2 mt-0">
          <p className="text-[#FFFFFF]/80 font-medium text-sm tracking-tight leading-relaxed">
            Developer
          </p>
        </button>
        <button className="bg-transparent transition-all lg:hover:bg-black/20 flex flex-row gap-2 items-center w-full lg:w-auto rounded-none lg:rounded-full px-4 py-2 mt-0">
          <p className="text-[#FFFFFF]/80 font-medium text-sm tracking-tight leading-relaxed">
            Contact
          </p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
