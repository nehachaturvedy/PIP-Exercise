import React from "react";

const CenterCard = ({ center }) => (
  <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100 relative">
    <div className="flex justify-between items-start mb-3 md:mb-4">
      <div className="flex-1">
        <h3 className="text-purple-800 text-lg md:text-xl font-bold mb-2">
          {center.centre}
        </h3>
        <p className="text-gray-600 text-xs md:text-sm">{center.Address}</p>
      </div>
      <div className="ml-2 absolute top-0 right-0">
        {center.type1 === "Radio SIS" && (
          <span className="px-2 md:px-3 py-1 bg-green-50 text-green-600 text-xs rounded-none whitespace-nowrap">
            Lab
          </span>
        )}
        {center.type1 === "LUPI MITRA" && (
          <span className="px-2 md:px-3 py-1 bg-purple-50 text-purple-600 text-xs rounded-none whitespace-nowrap">
            CC
          </span>
        )}
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 md:mt-6 space-y-2 md:space-y-0">
      <button className="text-green-600 hover:text-green-700 text-sm font-medium">
        Know More
      </button>
      <button className="w-full md:w-auto px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 text-sm">
        Book a Visit
      </button>
    </div>
  </div>
);

export default CenterCard;
