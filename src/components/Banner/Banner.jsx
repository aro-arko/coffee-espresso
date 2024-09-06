import React from "react";
import coffeeCup from "../../assets/images/icons/1.png";
import highQuality from "../../assets/images/icons/2.png";
import pureGrades from "../../assets/images/icons/3.png";
import properRoasting from "../../assets/images/icons/4.png";

const Banner = () => {
  return (
    <>
      <div
        className="hero min-h-screen font-rancho"
        style={{
          backgroundImage: "url(https://i.ibb.co/fG1kRVL/3.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maxHeight: "800px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content flex flex-col items-center md:items-end w-full px-4 sm:px-6 md:px-10">
          <div className="w-full md:w-2/3 text-center md:text-left relative">
            <h1 className="mb-3 md:mb-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="mb-4 md:mb-5 text-sm sm:text-base md:text-lg">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <div className="mt-3 md:mt-5 text-center md:text-left">
              <button className="btn bg-[#E3B577] font-bold border border-[#242222] hover:bg-[#d1a765]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ECEAE3]">
        <div className="max-w-6xl m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 py-14 px-4 sm:px-6">
          <div className="space-y-2 text-center md:text-left">
            <img
              className="h-16 w-16 mx-auto md:mx-0"
              src={coffeeCup}
              alt="Coffee Cup"
            />
            <h5 className="font-bold text-lg sm:text-xl">Coffee Cup</h5>
            <p className="text-sm sm:text-base">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="space-y-2 text-center md:text-left">
            <img
              className="h-16 w-16 mx-auto md:mx-0"
              src={highQuality}
              alt="High Quality"
            />
            <h5 className="font-bold text-lg sm:text-xl">High Quality</h5>
            <p className="text-sm sm:text-base">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="space-y-2 text-center md:text-left">
            <img
              className="h-16 w-16 mx-auto md:mx-0"
              src={pureGrades}
              alt="Pure Grades"
            />
            <h5 className="font-bold text-lg sm:text-xl">Pure Grades</h5>
            <p className="text-sm sm:text-base">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="space-y-2 text-center md:text-left">
            <img
              className="h-16 w-16 mx-auto md:mx-0"
              src={properRoasting}
              alt="Proper Roasting"
            />
            <h5 className="font-bold text-lg sm:text-xl">Proper Roasting</h5>
            <p className="text-sm sm:text-base">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
