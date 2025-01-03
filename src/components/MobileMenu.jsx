import React from "react";
import { Search } from "lucide-react";

const MobileMenu = () => (
  <div className="md:hidden border-b flex justify-between">
    <div className="px-4 py-2">
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search tests / packages"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
        />
        <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
      </div>
      {[
        "Book an Appointment",
        "Blood Tests & Packages",
        "For Doctors",
        "Partner with Us",
        "Blogs",
        "About Us",
        "Contact Us",
      ].map((item) => (
        <div key={item} className="py-2 border-b last:border-0">
          <span className="text-gray-600">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

export default MobileMenu;
