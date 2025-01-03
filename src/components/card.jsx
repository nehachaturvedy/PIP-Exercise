import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CollectionCenters = () => {
  const [centers, setCenters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 6;

  const fetchCenters = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://devapi-new.lupindiagnostics.com/api/v1/lsp/centers-by-lat-long",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lat: 19.0807836,
            lng: 73.026798,
          }),
        }
      );
      const data = await response.json();
      setCenters(data.data || []);
    } catch (error) {
      console.error("Error fetching centers:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCenters();
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(centers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCenters = centers.slice(startIndex, endIndex);

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

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 md:py-8 relative">
      <h2 className="text-black text-2xl md:text-3xl font-bold mb-4 md:mb-8">
        We are present across 650+ centers in India
      </h2>

      <h2 className="text-green-600 text-xl md:text-2xl font-semibold mb-4 md:mb-8">
        Centers Near Me
      </h2>

      <div className="absolute top-32 md:top-36 left-0 w-full h-px bg-gradient-to-r from-green-400 to-transparent "></div>
      {loading ? (
        <div className="flex justify-center items-center h-48 md:h-64">
          <div className="animate-spin rounded-full h-8 w-8 md:h-12 md:w-12 border-4 border-green-600 border-t-transparent"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {currentCenters.map((center) => (
              <CenterCard key={center.centreid} center={center} />
            ))}
          </div>

          <div className="flex justify-center items-center space-x-1 md:space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 flex items-center justify-center rounded-md ${
                  currentPage === i + 1
                    ? "bg-gray-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                } text-sm`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CollectionCenters;
