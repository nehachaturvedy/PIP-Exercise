import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  MapPin,
  Phone,
  ShoppingCart,
  User,
  Menu,
  X,
} from "lucide-react";

const DiagnosticHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Bar - Hidden on mobile */}
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

      {/* Main Navigation */}
      <div className="bg-white py-2 md:py-4 px-4 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Mobile Menu Button */}
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

          {/* Logo */}
          <div className="flex items-center">
            <img src={"/assets/Group.svg"} alt="logo" />
          </div>

          {/* Desktop Navigation */}
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
                <span>Login</span>
              </button>
            </div>
          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center space-x-4">
            <ShoppingCart className="w-6 h-6" />
            <User className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden  border-b flex justify-between">
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
      )}

      {/* Secondary Navigation - Hidden on mobile */}
      <div className="hidden md:flex bg-[#ebd9f1] py-3 px-4 border-b  justify-between">
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

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto py-2 md:py-4 px-4">
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-gray-600">Home</span>
          <ChevronDown className="w-4 h-4 -rotate-90 text-gray-400" />
          <span className="text-purple-700">Center Locator</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-48 md:h-[300px] bg-gradient-to-r from-purple-800 to-purple-600 overflow-hidden">
        {/* Background overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r left-1/2 w-1/4 from-purple-800/90 to-purple-800/0 backdrop-blur-0 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r left-0 w-1/2 from-purple-800/90 to-purple-800/90 z-10"></div>

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto px-4 h-full z-20">
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-2 md:mb-4">
              Center Locator
            </h1>
          </div>
        </div>

        {/* Background image */}
        <div className="absolute top-0 right-0 h-full w-1/2 md:w-2/5">
          <img
            src="/assets/image.png"
            alt="Doctor in laboratory"
            className="h-full w-full object-cover object-top"
          />
          {/* Image attribution */}
          <div className="absolute bottom-2 right-2 text-white/70 text-xs">
            Image: bazaar
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticHeader;
