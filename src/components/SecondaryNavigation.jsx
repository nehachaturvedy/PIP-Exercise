import React from "react";
import { ChevronDown } from "lucide-react";

const SecondaryNavigation = () => (
  <div className="hidden md:flex bg-[#ebd9f1] py-3 px-4 border-b justify-between">
    <div className="max-w-7xl mx-auto flex items-center space-x-8">
      {[
        "Book an Appointment",
        "Blood Tests & Packages",
        "For Doctors",
        "Partner with Us",
        "Blogs",
        "About Us",
        "Contact Us",
      ].map((item) => (
        <div
          key={item}
          className="flex items-center space-x-1 cursor-pointer text-[#642c76] font-semibold"
        >
          <span>{item}</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      ))}
    </div>
  </div>
);

export default SecondaryNavigation;
