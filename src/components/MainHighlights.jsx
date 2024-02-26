import React from "react";

const MainHighlights = () => {
  return (
    <>
      <div className="">
        <div className="bg-[#FFF4ED] px-4 py-2 rounded-lg flex flex-col md:ms-5 gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-white text-blue-600 px-4 rounded-lg">9.9</span>
            <span>Building Respinsive</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-white text-blue-600 px-4 rounded-lg">8.9</span>
            <span>Cool</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-white text-blue-600 px-4 rounded-lg">8.9</span>
            <span>Docs</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:mt-3">
          <h1>Why we love it</h1>
          <li className="flex gap-2">
            <img src="./assets/listcheck.png" alt="" />
            <span>Documentaion</span>
          </li>
          <li className="flex gap-2">
            <img src="./assets/listcheck.png" alt="" />
            <span>Easy use</span>
          </li>
          <li className="flex gap-2">
            <img src="./assets/listcheck.png" alt="" />
            <span>Out of box</span>
          </li>
        </div>
      </div>
    </>
  );
};

export default MainHighlights;
