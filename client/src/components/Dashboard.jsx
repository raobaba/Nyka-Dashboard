import React, { useState, useEffect } from "react";
import AddProductModal from "./AddProductModal";
import Analytics from "./Analytics";
import { logout } from "../redux/actions/user.actions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../redux/actions/product.actions";
import EditProductModal from "./EditProductModal";
import Pagination from "./Pagination";
import ProductTable from "./ProductTable";
import SortingFilteringContent from "./SortingFilteringContent";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";

function Dashboard() {
  const navigate = useNavigate();
  const [activeContent, setActiveContent] = useState("dashboard");
  const [isAddProductModalOpen, setAddProductModalOpen] = useState(false);
  const [filterGender, setFilterGender] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [isEditProductModalOpen, setEditProductModalOpen] = useState(false);
  const [selectedProductForEdit, setSelectedProductForEdit] = useState(null);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const products = useSelector((state) => state.product.products);
  const totalItems = products.length;

  console.log("Products", products);
  useEffect(() => {
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
  }, [
    dispatch,
    currentPage,
    pageLimit,
    sortOrder,
    searchTerm,
    filterGender,
    filterCategory
  ]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userAvatarUrl = userData && userData.avatar && userData.avatar.url;
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleButtonClick = (content) => {
    setActiveContent(content);
  };

  const openAddProductModal = () => {
    setAddProductModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setSelectedProductForEdit(product);
    setEditProductModalOpen(true);
  };

  const closeEditProductModal = () => {
    setSelectedProductForEdit(null);
    setEditProductModalOpen(false);
  };

  const closeAddProductModal = () => {
    setAddProductModalOpen(false);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePageLimitChange = (newLimit) => {
    setPageLimit(newLimit);
    setCurrentPage(1);
  };

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <Sidebar
        activeContent={activeContent}
        handleButtonClick={handleButtonClick}
        handleLogout={handleLogout}
      />

      {/* Main Content */}
      <div className="flex-1 p-4 h-full bg-gray-100">
        {/* Dashboard content */}
        {activeContent === "dashboard" && (
          <div className="mb-10">
            {/* SearchBar content */}
            <SearchBar 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              userAvatarUrl={userAvatarUrl}
            />
            {/* Sorting, Filtering content */}
            <SortingFilteringContent
              filterGender={filterGender}
              setFilterGender={setFilterGender}
              filterCategory={filterCategory}
              setFilterCategory={setFilterCategory}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              openAddProductModal={openAddProductModal}
            />
            {/* Table content */}
            <ProductTable
              loading={loading}
              error={error}
              products={products}
              handleEditProduct={handleEditProduct}
              handleDeleteProduct={handleDeleteProduct}
            />
            {/* Pagination content */}
            <Pagination
              currentPage={currentPage}
              handlePageChange={handlePageChange}
              pageLimit={pageLimit}
              totalItems={totalItems}
              handlePageLimitChange={handlePageLimitChange}
            />
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
      {/* Modal for EditProduct */}
      <EditProductModal
        isOpen={isEditProductModalOpen}
        onClose={closeEditProductModal}
        selectedProduct={selectedProductForEdit}
      />
    </div>
  );
}

export default Dashboard;
