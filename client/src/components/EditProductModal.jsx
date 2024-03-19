import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editProduct, fetchProducts } from "../redux/actions/product.actions";

const EditProductModal = ({ isOpen, onClose, selectedProduct }) => {
  const dispatch = useDispatch();
  const [editedProduct, setEditedProduct] = useState({
    name: "",
    gender: "",
    category: "",
    price: "",
    description: "",
    picture: null,
  });

  useEffect(() => {
    if (selectedProduct) {
      setEditedProduct({
        name: selectedProduct.name,
        gender: selectedProduct.gender,
        category: selectedProduct.category,
        price: selectedProduct.price,
        description: selectedProduct.description,
        picture: selectedProduct.picture, // Include picture in the state
      });
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    if (e.target.name === "picture") {
      const file = e.target.files[0];
      setEditedProduct((prevState) => ({
        ...prevState,
        picture: file, // Update picture in the state
      }));
    } else {
      const { name, value } = e.target;
      setEditedProduct((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      editProduct({ editData: editedProduct, productId: selectedProduct._id })
    );
    await dispatch(
      fetchProducts({
        currentPage: 1,
        pageLimit: 10,
        sortOrder: "",
        searchTerm: "",
        filterOptions: { gender: "", category: "" },
      })
    );
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      {/* Modal overlay */}
      <div
        className="overlay fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      {/* Modal content */}
      <div className="modal-content fixed w-5/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg z-50">
        <div className="w-full m-auto bg-white h-[570px] p-4 z-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Edit Product</h2>

          <form onSubmit={handleFormSubmit}>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={editedProduct.name}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-600"
              >
                Gender
              </label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={editedProduct.gender}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-600"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={editedProduct.category}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-600"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={editedProduct.price}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-600"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={editedProduct.description}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="avatar"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Picture (Upload)
              </label>
              <input
                type="file"
                name="picture"
                accept="image/*"
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white w-full mb-2 p-2 rounded hover:bg-blue-700"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
