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
    console.log("Delete triggered for ID:", _id); // Debugging line

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
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Delete response:", data); // Check if delete response is correct
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              // Correct the filter function
              const updatedCoffees = coffees.filter((cof) => cof._id !== _id);
              console.log("Updated coffee list:", updatedCoffees); // Debugging line

              // Update the state with the new coffee list
              setCoffees(updatedCoffees);
            } else {
              console.error("No items were deleted.");
            }
          })
          .catch((error) => {
            console.error("Error during deletion:", error);
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
          <button className="btn bg-[#D2B48C] mb-2">
            <FaEye className="h-5 w-5 text-white" />
          </button>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="btn bg-[#3C393B] mb-2">
              <MdEdit className="h-5 w-5 text-white" />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-[#EA4744]"
          >
            <MdDelete className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
