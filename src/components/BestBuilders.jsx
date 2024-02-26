import React from "react";

const BestBuilders = () => {
  return (
    <div className="md:mt-10 mt-4">
      <div className="heading my-5">
        <h1 className="md:text-5xl text-3xl font-normal drop-shadow-lg text-gray-700">
          Best Website builders in the US
        </h1>
      </div>
      <hr />
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col sm:flex-row md:gap-8 gap-2 my-2">
          <div className="lastUpdate flex md:gap-3 gap-2">
            <img src="./assets/check.png" className="object-contain" alt="" />
            <h3 className="text-sm md:text-lg">Last Updated - February 22, 2020</h3>
          </div>
          <div className="advertising flex md:gap-3 gap-2">
            <img
              src="./assets/exclation.png"
              className="object-contain"
              alt=""
            />
            <h3 className="text-sm md:text-lg">Advertising Disclosure</h3>
          </div>
        </div>

        <a href="/" className="flex items-center">
            <h3>Top Relevant</h3>
            <img src="./assets/vector-down.png" alt="" />
        </a>
      </div>
      <hr />
      <div className="md:w-[80%] w-full grid-cols-3 links grid lg:grid-cols-6 gap-3 md:my-6 md:py-2 my-4 text-center">
        <a href="" className="bg-white shadow-sm md:px-4 py-2 px-4 text-sm rounded-lg">
          Tools
        </a>
        <a href="" className="bg-white shadow-sm md:px-4 py-2 px-2 text-sm rounded-lg">
          AWS Builder
        </a>
        <a href="" className="bg-white shadow-sm md:px-4 py-2 px-2 text-sm rounded-lg">
          Start Build
        </a>
        <a href="" className="bg-white shadow-sm md:px-4 py-2 px-2 text-sm rounded-lg">
          Build Supplies
        </a>
        <a href="" className="bg-white shadow-sm md:px-4 py-2 px-2 text-sm rounded-lg">
          Tooling
        </a>
        <a href="" className="bg-white shadow-sm md:px-4 py-2 px-2 text-sm rounded-lg">
          BlueHosting
        </a>
      </div>

        <div className="hosting flex flex-wrap gap-2 text-sm">
            <h4>Home</h4>
            <img src="./assets/vector.png" className="object-contain" alt="" />
            <h4>Hosting for all</h4>
            <img src="./assets/vector.png" className="object-contain" alt="" />
            <h4>Hosting</h4>
            <img src="./assets/vector.png" className="object-contain" alt="" />
            <h4>Hosting6</h4>
            <img src="./assets/vector.png" className="object-contain" alt="" />
            <h4>Hosting5</h4>
        </div>
      
    </div>
  );
};

export default BestBuilders;
