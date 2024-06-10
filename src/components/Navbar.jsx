import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-[#000000] h-[70px] rounded-sm text-[#fff] justify-between">
      <div className="flex items-center gap-6 ml-12 ">
        <p className=" text-2xl font-semibold ">Abstract </p>
        <p className=" text-2xl font-semibold ">| </p>
        <p className=" text-2xl font-semibold ">Help Center</p>
      </div>

      <div className="flex items-center text-2xl font-semibold  gap-6 mr-12">
        <button className=" border-2 border-white rounded-lg h-[50px] w-[200px]">
          Submit a request
        </button>
        <button className="bg-[#4C5FD5] h-[50px] w-[150px]  rounded-lg">
          Sign In{" "}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
