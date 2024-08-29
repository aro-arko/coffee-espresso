import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Coffee from "../Coffee/Coffee";
import { FiCoffee } from "react-icons/fi";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="">
      <Banner></Banner>
      {/* All Coffee Section: {coffees.length} */}
      <div className="text-center space-y-2 mt-16">
        <h5>--- Sip & Savor ---</h5>
        <h2>Our Popular Products</h2>

        <Link to="/addCoffee">
          <button className="btn bg-[#E3B577] border-2 border-[#331A15] mt-2 mb-12">
            <span className="flex items-center">
              Add Coffee <FiCoffee className="ml-1" />
            </span>
          </button>
        </Link>
      </div>
      <div
        className=""
        style={{
          backgroundImage: "url(https://i.ibb.co/WkSkT8z/1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maxHeight: "800px",
        }}
      >
        <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto p-8">
          {coffees.map((coffee) => (
            <Coffee
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></Coffee>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
