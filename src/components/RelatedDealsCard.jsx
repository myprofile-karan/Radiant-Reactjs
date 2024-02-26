const RelatedDealsCard = () => {
  return (
    <div className="px-10 py-4 md:mt-7 bg-white rounded-xl shadow-lg w-full flex flex-col items-center">
      <div className="image py-6">
        <img src="./assets/sectionimg.png" className="object-contain" alt="" />
      </div>
      <div className="flex flex-col md:mt-6 mt-3 md:gap-3 gap-1">
        <div className="off flex gap-2">
          <span className="bg-gray-100 p-1 rounded-lg text-sm text-gray-700">
            20% off
          </span>
          <span className="bg-gray-100 p-1 rounded-lg text-sm text-gray-700">
            Limited Time
          </span>
        </div>
        <div className="">
          <h3 className="text-center font-bold text-gray-600">Webbuilder 1</h3>
          <p className="">Computer Codern classic with wix support</p>
        </div>
        <div className="price flex items-end gap-2">
          <span className="text-xl">$39.96</span>
          <span className="text-[#9FA9B3]">$49.96</span>
          <span className="text-[#EF4C5D]">(20% off)</span>
        </div>
        <div className="button">
          <button className="w-full bg-[#1B88F4] hover:bg-blue-600 transition-colors py-2 text-white rounded-lg">
            View Deal
          </button>
        </div>
      </div>
    </div>
  );
};

export default RelatedDealsCard;
