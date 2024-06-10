import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col  h-[500px]">
      <div className="flex flex-col h-full bg-[#dadbf1] justify-center items-center text-white p-8 rounded-lg gap-y-8">
        <p className="text-[80px] font-semibold text-black">How can we Help?</p>
        <input className="h-[70px] w-[900px] rounded-xl text-2xl" type="text" placeholder="      Search" />
      </div>
    </div>
  );
};

export default Hero;
