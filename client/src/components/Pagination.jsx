import React from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

function Pagination({ currentPage, setCurrentPage, pageLimit, setPageLimit, totalItems }) {
  const totalPages = Math.ceil(totalItems / pageLimit);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePageLimitChange = (newLimit) => {
    setPageLimit(newLimit);
    console.log(newLimit)
    setCurrentPage(1);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
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
        onClick={() => handlePageChange(currentPage + 1)}
        className="border px-3 py-2 border-gray-300 rounded-r focus:outline-none focus:ring focus:border-blue-300"
        disabled={currentPage === totalPages}
      >
        <GrFormNext />
      </button>
      <select
        className="ml-2 border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
        value={pageLimit}
        onChange={(e) => handlePageLimitChange(Number(e.target.value))}
      >
        <option value={5}>5 per page</option>
        <option value={10}>10 per page</option>
        <option value={15}>15 per page</option>
      </select>
    </div>
  );
}

export default Pagination;
