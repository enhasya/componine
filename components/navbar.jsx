import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#161619] flex flex-col lg:flex-row gap-4 lg:gap-0 w-full h-auto px-8 py-8 pb-0 lg:px-6 lg:py-4 items-center justify-between">
      <div className="flex flex-col lg:flex-row w-full lg:w-auto gap-4 lg:gap-0 items-start lg:items-center justify-start">
        <button className="bg-transparent transition-all hover:opacity-80 lg:hover:opacity-100 lg:hover:bg-white/10 flex flex-row gap-2 items-center w-full lg:w-auto rounded-none lg:rounded-full p-0 lg:px-4 lg:py-2 mt-0">
          <p className="text-[#FFFFFF]/80 font-bold text-sm tracking-tight leading-relaxed">
            Componine
          </p>
        </button>
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:w-auto gap-4 lg:gap-0 items-start lg:items-center justify-end">
        <button className="bg-transparent transition-all hover:opacity-80 lg:hover:opacity-100 lg:hover:bg-white/10 flex flex-row gap-2 items-center w-full lg:w-auto rounded-none lg:rounded-full p-0 lg:px-4 lg:py-2 mt-0">
          <p className="text-[#FFFFFF]/80 font-medium text-sm tracking-tight leading-relaxed">
            Components
          </p>
        </button>
        <button className="bg-transparent transition-all hover:opacity-80 lg:hover:opacity-100 lg:hover:bg-white/10 flex flex-row gap-2 items-center w-full lg:w-auto rounded-none lg:rounded-full p-0 lg:px-4 lg:py-2 mt-0">
          <p className="text-[#FFFFFF]/80 font-medium text-sm tracking-tight leading-relaxed">
            Pricing
          </p>
        </button>
        <label className="bg-transparent hidden lg:flex flex-row gap-2 items-center w-full lg:w-auto rounded-none p-0 lg:px-4 lg:py-2 mt-0">
          <p className="text-[#FFFFFF]/20 font-medium text-sm tracking-tight leading-relaxed">
            |
          </p>
        </label>
        <button className="bg-transparent transition-all hover:opacity-80 lg:hover:opacity-100 lg:hover:bg-white/10 flex flex-row gap-2 items-center w-full lg:w-auto rounded-none lg:rounded-full p-0 lg:px-4 lg:py-2 mt-0">
          <p className="text-[#FFFFFF]/80 font-medium text-sm tracking-tight leading-relaxed">
            Developer
          </p>
        </button>
        <button className="bg-transparent transition-all hover:opacity-80 lg:hover:opacity-100 lg:hover:bg-white/10 flex flex-row gap-2 items-center w-full lg:w-auto rounded-none lg:rounded-full p-0 lg:px-4 lg:py-2 mt-0">
          <p className="text-[#FFFFFF]/80 font-medium text-sm tracking-tight leading-relaxed">
            Contact
          </p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
