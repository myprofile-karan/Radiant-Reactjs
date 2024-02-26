import React from "react";
import RelatedDealsCard from "./RelatedDealsCard";

const RelatedDealsSection = () => {
  return (
    <div className="mt-10">
      <h1 className="lg:text-5xl md:text-4xl text-3xl py-3 drop-shadow-lg">
        Related deals you might like for
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        <RelatedDealsCard />
        <RelatedDealsCard />
        <RelatedDealsCard />
      </div>

      <div className="w-full my-5 md:p-8 p-3 md:mt-8 flex flex-wrap md:flex-nowrap gap-5 md:gap-0">
        <h1 className="w-full text-2xl md:text-4xl drop-shadow-lg">
          Sign up and get exclusive special deals
        </h1>
        <div className="w-full md:px-10 flex justify-center items-center rounded-lg overflow-hidden">
          <input type="text" className="w-full rounded-s-xl	px-5 h-12 focus:outline-none bg-white" />
          <button className="w-36 h-12 rounded-e-xl	 bg-[#1B88F4] hover:bg-blue-600 text-gray-200">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default RelatedDealsSection;
