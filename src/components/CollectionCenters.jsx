import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CenterCard from "./CenterCard";
import Pagination from "./Pagination";

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

  const totalPages = Math.ceil(centers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCenters = centers.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
      <h2 className="text-black text-2xl md:text-3xl font-bold mb-4 md:mb-8">
        We are present across 650+ centers in India
      </h2>

      <h2 className="text-green-600 text-xl md:text-2xl font-semibold mb-4 md:mb-8">
        Centers Near Me
      </h2>

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

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default CollectionCenters;
