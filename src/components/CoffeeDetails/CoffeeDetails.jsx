import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import banner from "../../assets/images/more/11.png";
import { IoArrowBack } from "react-icons/io5";

const CoffeeDetails = () => {
  const coffeeDetails = useLoaderData();
  const { name, photo, chef, supplier, category, taste, details } =
    coffeeDetails;
  console.log(coffeeDetails);
  return (
    <div
      className="p-20"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <Link to="/home" className="block mb-14 hover:underline text-xl">
          <span className="flex items-center">
            <IoArrowBack className="mr-1" /> Back to Home
          </span>
        </Link>
        <div className="bg-[#F4F3F0] px-40 py-32 rounded-2xl">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <img className="h-80" src={photo} alt="" />
            </div>
            <div>
              <h2 className="font-bold text-4xl font-rancho mb-6">Niceties</h2>
              <div className="text-xl space-y-2">
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
