import React from "react";
import MainHighlights from "./MainHighlights";

const BuilderComponent = (props) => {
  return (
    <div className="relative bg-white shadow-lg px-4 md:py-8 py-2 rounded-lg gap-5 md:gap-1 md:mt-6 mt-3 w-full flex flex-col md:flex-row md:justify-between justify-center md:items-center">
      <div className=" md:w-[600px] flex flex-col items-center justify-center gap-3 order-1">
        {props.img != undefined && (
          <div className="bg-orange-500 flex gap-2 absolute rounded-lg text-white px-3 py-1 left-0 top-0  shadow-lg">
            <img src={props.img} alt="" />
            <h4>{props.bestChoice}</h4>
          </div>
        )}
        <div className="absolute w-10 h-10 bg-white flex items-center justify-center rounded-full left-[-15px] top-12 shadow-lg">
          <h1>{props.count}</h1>
        </div>

        <img src="./assets/sectionimg.png" className="object-contain" alt="" />
        <h5>{props.imgTitle || "Builder 1"}</h5>
      </div>

      <div className="md:w-[1200px] terms-of-service2 order-3 sm:order-2">
        <div className="">
          <b className="text-sm lg:text-lg">{props.wiproHeading1}</b>
          <span className="lg:leading-6 leading-snug text-sm lg:text-[1rem]">
            {props.para1}
          </span>
          {props.off != undefined && (
            <div className="my-2">
              <span className="bg-gray-100 p-1 rounded-lg text-sm">
                {props.off}
              </span>
            </div>
          )}
        </div>
        <div className="text w-full md:mt-3">
          <b className="text-sm lg:text-lg">{props.wiproHeading2}</b>
          <div className="text-frame3">
            <div className="what-you-get ps-10 md:leading-6 leading-snug text-sm lg:text-[1rem]">
              {props.para2}
            </div>

            {props.para2 == undefined && (
                <MainHighlights />
            )}

          </div>
          <div className="button flex items-center text-blue-500  md:mt-4">
            <a href="" className="hover:text-red-600">Show More</a>
            <img src="./assets/vector-down.png" alt="" />
          </div>
        </div>
      </div>
      
      <div className="md:w-[600px] flex flex-col justify-center items-center gap-5 order-2 sm:order-3">
        <div className="flex flex-col items-center gap-2 p-8 rounded-lg bg-[#F3F9FF]">
          <h1 className="text-4xl">{props.rating}</h1>
          <h4>{props.comment}</h4>
          <img src={props.starimg} alt="" />
        </div>
        <div className="button w-full px-10">
          <button className="w-full bg-[#1B88F4] hover:bg-blue-600 transition-colors py-2 text-white rounded-lg">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuilderComponent;
