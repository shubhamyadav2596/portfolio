import React from "react";
import Github from "../assets/Github.png";

const Cards = ({ item }) => {
  return (
    <div className="border border-red-500 rounded-lg w-[350px] lg:w-[400px] bg-red-50">
      <div className="w-full h-44 overflow-hidden">
        <img src={item.image} alt="" className="rounded-lg w-full" />
      </div>
      <div className="p-4">
        <h1 className="font-semibold text-xl mb-2">{item.title}</h1>
        <div className="scroll-hidden max-h-48 overflow-auto">
          <p className="text-justify">{item.desc}</p>
        </div>
        <div className="flex gap-3 mt-4">
          <button className="bg-red-500 text-white px-3 py-2 rounded-md">
            <a href={item.link} target="_blank">
              Live Preview
            </a>
          </button>
          <button className="bg-black text-white px-3 py-2 rounded-md">
            <a href={item.github} target="_blank" className="flex gap-1">
              <img src={Github} alt="" className="w-6" />
              Github Link
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
