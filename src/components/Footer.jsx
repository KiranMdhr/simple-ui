import React from "react";
import logo from "../assets/background.png";

const Footer = () => {
  return (
    <div className=" h-[400px] bg-black text-white grid grid-cols-4 ">
      <div className="mt-8 ml-12">
        <h1 className="font-semibold text-2xl ">Abstract</h1>
        <p className="text-xl mt-4">Branches</p>
      </div>
      <div className="mt-8 ">
        <h1 className="font-semibold text-2xl flex flex-col gap-y-4">
          Community
        </h1>
        <div className="text-xl flex flex-col gap-y-4 mt-4">
          <p>Blog</p>
          <p>Help Center</p>
          <p>Release Notes</p>
          <p>Status</p>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="font-semibold text-2xl ">Community</h1>
        <div className="text-xl flex flex-col gap-y-4 mt-4">
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Facebook</p>
          <p>Dribble</p>
          <p>Podcast</p>
        </div>
      </div>

      <div className="mt-8 mr-12">
        <img className=" ml-8 h-[40px]" src={logo}></img>
        <div className="text-xl flex flex-col gap-y-4 mt-4">
          <p>@Copyright 2022</p>
          <p>Abstract Studio Design, Inc.</p>
          <p>All right reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
