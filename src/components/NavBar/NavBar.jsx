import React from "react";
import logo from "../../assets/images/more/logo1.png";

const NavBar = () => {
  return (
    <div className="h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 flex items-center justify-center bg-[#372727] px-4">
      <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
        <img
          className="h-8 sm:h-10 md:h-12 lg:h-16 xl:h-20"
          src={logo}
          alt="Logo"
        />
        <h2 className="font-rancho text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-6xl text-white">
          Espresso Emporium
        </h2>
      </div>
    </div>
  );
};

export default NavBar;
