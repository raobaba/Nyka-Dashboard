import React from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

function Pagination({ currentPage, setCurrentPage, pageLimit, setPageLimit }) {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        className="border px-3 py-2 border-gray-300 rounded-l focus:outline-none focus:ring focus:border-blue-300"
        disabled={currentPage === 1}
      >
        <GrFormPrevious />
      </button>

      <button
        className="bg-blue-500 text-white px-3 py-1 rounded focus:outline-none focus:ring focus:border-blue-300 text-lg md:text-xl lg:text-2xl"
      >
        {currentPage}
      </button>

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        className="border px-3 py-2 border-gray-300 rounded-r focus:outline-none focus:ring focus:border-blue-300"
        disabled={currentPage === pageLimit}
      >
        <GrFormNext />
      </button>
    </div>
  );
}

export default Pagination;
