import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      quantity,
      details,
      photo,
    };
    // console.log(newCoffee);

    fetch("https://coffee-espresso-store.onrender.com/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Link to="/home" className="block mb-8 text-blue-600 hover:underline">
        <span className="flex items-center">
          <IoArrowBack className="mr-1" /> Back to Home
        </span>
      </Link>
      <div className="bg-[#F4F3F0] p-8 md:p-12 rounded-lg shadow-lg">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-rancho text-3xl md:text-5xl mb-4">
            Add New Coffee
          </h2>
          <p className="text-center mx-auto max-w-2xl text-gray-600 text-sm md:text-base">
            Fill in the details below to add a new coffee to our collection.
            Whether it’s a rich espresso blend or a smooth, aromatic roast,
            share the story behind your coffee creation. Let's make every sip
            unforgettable by capturing the unique flavors, origins, and essence
            of your brew.
          </p>
        </div>

        <form
          onSubmit={handleAddCoffee}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"
        >
          <div>
            <label className="block mb-2">
              <span className="font-medium">Name</span>
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              name="name"
              placeholder="Enter coffee name"
              required
            />
          </div>
          <div>
            <label className="block mb-2">
              <span className="font-medium">Chef</span>
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              name="chef"
              placeholder="Enter coffee chef"
              required
            />
          </div>
          <div>
            <label className="block mb-2">
              <span className="font-medium">Supplier</span>
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              required
            />
          </div>
          <div>
            <label className="block mb-2">
              <span className="font-medium">Taste</span>
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              required
            />
          </div>
          <div>
            <label className="block mb-2">
              <span className="font-medium">Category</span>
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              name="category"
              placeholder="Enter coffee category"
              required
            />
          </div>
          <div>
            <label className="block mb-2">
              <span className="font-medium">Quantity</span>
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="number"
              name="quantity"
              placeholder="Enter coffee quantity"
              required
            />
          </div>
          <div>
            <label className="block mb-2">
              <span className="font-medium">Details</span>
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              name="details"
              placeholder="Enter coffee details"
              required
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-2">
              <span className="font-medium">Photo</span>
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              required
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <input
              className="w-full p-2 font-semibold border-[#331A15] border bg-[#D2B48C] hover:bg-[#c19a7e] transition-colors cursor-pointer rounded"
              type="submit"
              value="Add Coffee"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
