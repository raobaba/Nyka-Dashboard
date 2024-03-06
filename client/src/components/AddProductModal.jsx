// AddProductModal.js

import React, { useState } from "react";
import { FiX } from "react-icons/fi";

const AddProductModal = ({ isOpen, onClose }) => {
  const [productName, setProductName] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission here
    // You can use the product details (productName, gender, category, price, description)
    // and perform any necessary actions (e.g., API calls, state updates).
    // Don't forget to close the modal after handling the submission.
    onClose();
  };

  const closeModal = () => {
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
      <div className="overlay fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
      <div className="modal-content fixed w-5/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg z-50">
        <div className="w-full m-auto bg-white p-4 z-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Add Product</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label htmlFor="productName" className="block text-sm font-medium text-gray-600">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                className="mt-1 p-2 border rounded w-full"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-600">
                Gender
              </label>
              <input
                type="text"
                id="gender"
                name="gender"
                className="mt-1 p-2 border rounded w-full"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-600">
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                className="mt-1 p-2 border rounded w-full"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block text-sm font-medium text-gray-600">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="mt-1 p-2 border rounded w-full"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="mt-1 p-2 border rounded w-full"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
