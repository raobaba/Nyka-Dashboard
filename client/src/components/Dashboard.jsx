import React, { useState, useEffect } from "react";
import { RxDashboard } from "react-icons/rx";
import { SiGoogleanalytics } from "react-icons/si";
import { CiLogout } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch, CiUser } from "react-icons/ci";
import AddProductModal from "./AddProductModal";
import Analytics from "./Analytics";
import { logout } from "../redux/actions/user.actions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/product.actions";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import ProductTable from "./ProductTable";
import { deleteProduct } from "../redux/actions/product.actions";


function Dashboard() {
  const [activeContent, setActiveContent] = useState("dashboard");
  const [isAddProductModalOpen, setAddProductModalOpen] = useState(false);
  const [filterGender, setFilterGender] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const products = useSelector((state) => state.product.products);
  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / pageLimit);
  console.log("totalPages",totalPages)
  console.log("totalItems",totalItems);
  console.log("currentPages",currentPage);
  console.log("pageLimit",pageLimit)
  useEffect(() => {
    if (sortOrder) {
      dispatch(
        fetchProducts({
          currentPage,
          pageLimit,
          sort: "price",
          order: sortOrder,
          search: searchTerm,
          filterOptions: { gender: filterGender, category: filterCategory },
        })
      );
    } else {
      dispatch(
        fetchProducts({
          currentPage,
          pageLimit,
          search: searchTerm,
          filterOptions: { gender: filterGender, category: filterCategory },
        })
      );
    }
  }, [
    dispatch,
    currentPage,
    pageLimit,
    sortOrder,
    searchTerm,
    filterGender,
    filterCategory,
  ]);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleButtonClick = (content) => {
    setActiveContent(content);
  };

  const openAddProductModal = () => {
    setAddProductModalOpen(true);
  };

  const closeAddProductModal = () => {
    setAddProductModalOpen(false);
  };
  const handleDeleteProduct = (productId) => {
    console.log(productId);
    dispatch(deleteProduct(productId));
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePageLimitChange = (newLimit) => {
    setPageLimit(newLimit);
    setCurrentPage(1);
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="h-60 w-full md:w-1/6 p-4 flex flex-col justify-between">
        <h2 className="text-2xl font-bold cursor-pointer mb-4">
          <Link to={"/"}>Nyka Dashboard</Link>
        </h2>
        <div className="flex flex-col">
          <button
            className={`flex items-center p-2 mb-3 rounded ${
              activeContent === "dashboard"
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-300"
            }`}
            onClick={() => handleButtonClick("dashboard")}
          >
            <RxDashboard className="mr-2" />
            Dashboard
          </button>
          <button
            className={`flex items-center mb-3 p-2 rounded ${
              activeContent === "analytics"
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-300"
            }`}
            onClick={() => handleButtonClick("analytics")}
          >
            <SiGoogleanalytics className="mr-2" />
            <p>Analytics</p>
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center hover:bg-gray-300 p-2 rounded"
          >
            <CiLogout className="mr-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 h-full bg-gray-100">
        {/* Dashboard content */}
        {activeContent === "dashboard" && (
          <div className="mb-10">
            {/* Content for the Dashboard */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center h-10 mb-4">
              <div className="flex items-center border w-full md:w-7/12 h-full bg-white rounded-xl mb-2 md:mb-0">
                <CiSearch className="ml-2" />
                <input
                  type="text"
                  className="w-full h-full border-none rounded-xl outline-none p-2"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center w-full md:w-3/12 justify-end">
                <div className="border px-1 py-1 rounded-xl mr-3 hidden md:block bg-slate-100 cursor-pointer">
                  <IoIosNotifications className="text-3xl" />
                </div>
                <div className="border px-1 py-1 rounded-xl hidden md:block bg-slate-100 cursor-pointer">
                  <CiUser className="text-3xl" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-10/12  flex flex-col md:flex-row justify-between items-center h-10 px-4 md:px-0">
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
           {/* Table content */}
            <ProductTable
              loading={loading}
              error={error}
              products={products}
              onDeleteProduct={handleDeleteProduct}
            />
           {/* Pagination content */}
            <div className="flex items-center justify-end space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="border px-3 py-2 border-gray-300 rounded-l focus:outline-none focus:ring focus:border-blue-300"
                disabled={currentPage === 1}
              >
                <GrFormPrevious />
              </button>
              <button className="bg-blue-500 text-white px-3 py-1 rounded focus:outline-none focus:ring focus:border-blue-300 text-md md:text-lg lg:text-lg">
                {currentPage}
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="border px-3 py-2 border-gray-300 rounded-r focus:outline-none focus:ring focus:border-blue-300"
                disabled={pageLimit > totalItems } 
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
          </div>
        )}
        {/* Analytics content */}
        {activeContent === "analytics" && <Analytics />}
      </div>
      {/* Modal for Add Product */}
      <AddProductModal
        isOpen={isAddProductModalOpen}
        onClose={closeAddProductModal}
      />
    </div>
  );
}

export default Dashboard;
