import React from "react";
import { Phone } from "lucide-react";

const TopBar = () => (
  <div className="hidden md:flex bg-[#f3fff8] py-2 px-4 space-x-4 border-b justify-center items-center">
    <div className="flex items-center text-green-600">
      <Phone className="w-4 h-4 mr-2" />
      <span>7030 300 400</span>
    </div>
    <span className="text-gray-500">Or</span>
    <button className="text-green-600 border border-green-600 px-4 py-1 rounded-md hover:bg-green-50">
      Get a Callback
    </button>
  </div>
);

export default TopBar;
