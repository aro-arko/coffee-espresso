import React from "react";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = ({ coffee, coffees, setCoffees }) => {
  const {
    _id,
    name,
    chef,
    supplier,
    taste,
    category,
    quantity,
    details,
    photo,
  } = coffee;
  // console.log(coffees);

  const handleDelete = (_id) => {
    // console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-espresso-store.onrender.com/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const updatedCoffees = coffees.filter((cof) => cof._id !== _id);
              setCoffees(updatedCoffees);
            }
          });
      }
    });
  };
  return (
    <div className="bg-[#F5F4F1] p-12 rounded-2xl">
      <div className="flex justify-between items-center">
        <img className="h-40 w-24" src={photo} alt="" />
        <div className="mr-28">
          <h5>
            <span>Name: </span>
            {name}
          </h5>
          <h5>
            <span>Chef: </span>
            {name}
          </h5>
          <h5>
            <span>Price: </span>$10.90
          </h5>
        </div>
        <div className="grid grid-cols-1">
          <Link to={`/coffee/${_id}`}>
            <button className="btn bg-[#D2B48C] mb-2">
              <FaEye className="h-5 w-5 text-white" />
            </button>
          </Link>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="btn bg-[#3C393B] mb-2">
              <MdEdit className="h-5 w-5 text-white" />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-[#EA4744] w-full"
          >
            <MdDelete className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
