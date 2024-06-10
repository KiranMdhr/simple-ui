import React from "react";
import logo from "../assets/background.png";

const list = [
  {
    logo: logo,
    title: "Branches",
    desc: "Abstract Branches let you manage, version, and document your designs in one place",
    button: "Learn More",
  },

  {
    logo: logo,
    title: "Branches",
    desc: "Abstract Branches let you manage, version, and document your designs in one place",
    button: "Learn More",
  },

  {
    logo: logo,
    title: "Branches",
    desc: "Abstract Branches let you manage, version, and document your designs in one place",
    button: "Learn More",
  },

  {
    logo: logo,
    title: "Branches",
    desc: "Abstract Branches let you manage, version, and document your designs in one place",
    button: "Learn More",
  },

  {
    logo: logo,
    title: "Branches",
    desc: "Abstract Branches let you manage, version, and document your designs in one place",
    button: "Learn More",
  },

  {
    logo: logo,
    title: "Branches",
    desc: "Abstract Branches let you manage, version, and document your designs in one place",
    button: "Learn More",
  },

  {
    logo: logo,
    title: "Branches",
    desc: "Abstract Branches let you manage, version, and document your designs in one place",
    button: "Learn More",
  },

  {
    logo: logo,
    title: "Branches",
    desc: "Abstract Branches let you manage, version, and document your designs in one place",
    button: "Learn More",
  },
];

const Items = () => {
  return (
    <div className="grid grid-cols-4 text-black bg-white mx-40">
      {list.map((item, index) => (
        <div key={index} className=" h-[300px] p-2 my-4  mt-10  ">
          <div className="flex mb-4">
            <img className="h-[100px] 2-[100px]" src={item.logo} />
          </div>
          <div className="flex flex-col gap-y-4 w-[350px]">
            <p className="text-2xl font-semibold">{item.title}</p>
            <p className="text-xl">{item.desc}</p>
            <p className="text-[#dadbf1] text-sm ">{item.button}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
