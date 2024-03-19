import React from "react";

function SortingFilteringContent({
  filterGender,
  setFilterGender,
  filterCategory,
  setFilterCategory,
  sortOrder,
  setSortOrder,
  openAddProductModal
}) {
  return (
    <div className="w-full md:w-10/12 flex flex-col md:flex-row justify-between items-center h-10 px-4 md:px-0">
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
        <select
          className="w-full rounded-lg md:w-auto bg-white border border-gray-300 p-2 focus:outline-none"
          value={filterGender}
          onChange={(e) => setFilterGender(e.target.value)}
        >
          <option value="">Filter By Gender</option>
          <option value="male">MALE</option>
          <option value="female">FEMALE</option>
        </select>
        <select
          className="w-full md:w-auto bg-white border border-gray-300 rounded-lg p-2 mt-2 md:mt-0 md:ml-4 focus:outline-none"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">Filter By Category</option>
          <option value="makeup">MAKEUP</option>
          <option value="skincare">SKINCARE</option>
          <option value="haircare">HAIRCARE</option>
        </select>
        <select
          className="w-full md:w-auto bg-white border border-gray-300 rounded-lg p-2 mt-2 md:mt-0 md:ml-4 focus:outline-none"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort By Price</option>
          <option value="asc">ASCENDING</option>
          <option value="desc">DESCENDING</option>
        </select>
      </div>
      <div className="mt-2 md:mt-0">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none"
          onClick={openAddProductModal}
        >
          ADD PRODUCT
        </button>
      </div>
    </div>
  );
}

export default SortingFilteringContent;
