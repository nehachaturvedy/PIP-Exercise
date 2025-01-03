import React from "react";
import {
  Search,
  ChevronDown,
  MapPin,
  ShoppingCart,
  User,
  Menu,
  X,
} from "lucide-react";

const MainNavigation = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => (
  <div className="bg-white py-2 md:py-4 px-4 border-b">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <button
        className="md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      <div className="flex items-center">
        <img src={"/assets/Group.svg"} alt="logo" />
      </div>

      <div className="hidden md:flex items-center flex-1 justify-end space-x-6">
        <div className="flex items-center space-x-2 px-4">
          <MapPin className="w-5 h-5" />
          <span>Mumbai</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="max-w-xl px-6 flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search tests / packages"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 cursor-pointer">
            <MapPin className="w-5 h-5" />
            <span>Center Locator</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-green-700">
            <User className="w-5 h-5" />
            <span>Customer Login</span>
          </button>
        </div>
      </div>

      <div className="flex md:hidden items-center space-x-4">
        <ShoppingCart className="w-6 h-6" />
        <User className="w-6 h-6" />
      </div>
    </div>
  </div>
);

export default MainNavigation;
