import React from "react";
import logo from "../../assets/images/more/logo1.png";

const NavBar = () => {
  return (
    <div className="h-10 flex items-center justify-center bg-[#372727]">
      <div className="flex">
        <img className="h-7" src={logo} alt="" />
        <h2 className="font-rancho text-xl text-white justify-center items-center">
          Espresso Emporium
        </h2>
      </div>
    </div>
  );
};

export default NavBar;
