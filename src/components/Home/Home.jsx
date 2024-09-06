import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Coffee from "../Coffee/Coffee";
import { FiCoffee } from "react-icons/fi";
import FollowUs from "../FollowUs/FollowUs";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>
      <Banner />
      {/* All Coffee Section: {coffees.length} */}
      <div className="text-center space-y-4 mt-16 px-4 sm:px-6 md:px-8">
        <div className="mb-5">
          <h5 className="text-base sm:text-lg text-gray-600">
            --- Sip & Savor ---
          </h5>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-rancho font-bold">
            Our Popular Products
          </h2>
        </div>

        <Link to="/addCoffee">
          <button className="btn bg-[#E3B577] border-2 border-[#331A15] mt-2 mb-12 hover:bg-[#d1a765]">
            <span className="flex items-center">
              Add Coffee <FiCoffee className="ml-1" />
            </span>
          </button>
        </Link>
      </div>

      <div
        className="bg-cover bg-center max-h-[800px] py-8"
        style={{
          backgroundImage: "url(https://i.ibb.co/WkSkT8z/1.png)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
          {coffees.map((coffee) => (
            <Coffee
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            />
          ))}
        </div>
      </div>
      <FollowUs></FollowUs>
    </div>
  );
};

export default Home;
