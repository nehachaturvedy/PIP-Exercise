import React from "react";
import { ChevronDown } from "lucide-react";

const Breadcrumb = () => (
  <div className="max-w-7xl mx-auto py-2 md:py-4 px-4">
    <div className="flex items-center space-x-2 text-sm">
      <span className="text-gray-600">Home</span>
      <ChevronDown className="w-4 h-4 -rotate-90 text-gray-400" />
      <span className="text-purple-700">Center Locator</span>
    </div>
  </div>
);

export default Breadcrumb;
