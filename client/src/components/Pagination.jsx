import React from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

function Pagination() {
  return (
    <div class="flex items-center space-x-2">
      <button className="border px-3 py-2 border-gray-300 rounded-l focus:outline-none focus:ring focus:border-blue-300">
        <GrFormPrevious />
      </button>

      <button className="bg-blue-500 text-white px-3 py-1 rounded focus:outline-none focus:ring focus:border-blue-300">
        1
      </button>

      <button className="border px-3 py-2 border-gray-300 rounded-r focus:outline-none focus:ring focus:border-blue-300">
        <GrFormNext />
      </button>
    </div>
  );
}

export default Pagination;
