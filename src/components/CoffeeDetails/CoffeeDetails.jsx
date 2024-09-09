import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import banner from "../../assets/images/more/11.png";
import { IoArrowBack } from "react-icons/io5";

const CoffeeDetails = () => {
  const coffeeDetails = useLoaderData();
  const { name, photo, chef, supplier, category, taste, details } =
    coffeeDetails;
  // console.log(coffeeDetails);

  return (
    <div
      className="p-8 sm:p-12 lg:p-20"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <Link
          to="/home"
          className="block mb-8 text-xl hover:underline sm:mb-12 lg:mb-14"
        >
          <span className="flex items-center">
            <IoArrowBack className="mr-1" /> Back to Home
          </span>
        </Link>
        <div className="bg-[#F4F3F0] px-6 py-8 sm:px-12 sm:py-16 lg:px-20 lg:py-32 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex justify-center">
              <img
                className="h-60 sm:h-72 lg:h-80 object-cover rounded-lg"
                src={photo}
                alt={name}
              />
            </div>
            <div>
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl font-rancho mb-4 sm:mb-6">
                Niceties
              </h2>
              <div className="text-base sm:text-lg lg:text-xl space-y-2">
                <p>
                  <strong>Name: </strong> {name}
                </p>
                <p>
                  <strong>Chef: </strong> {chef}
                </p>
                <p>
                  <strong>Supplier: </strong> {supplier}
                </p>
                <p>
                  <strong>Taste: </strong> {taste}
                </p>
                <p>
                  <strong>Category: </strong> {category}
                </p>
                <p>
                  <strong>Details: </strong> {details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
