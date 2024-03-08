import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/actions/product.actions";

const AddProductModal = ({ isOpen, onClose }) => {
  const [product, setProduct] = useState({
    productName: "",
    gender: "",
    category: "",
    price: "",
    description: "",
  });
  const { productName, gender, category, price, description } = product;
  const [picture, setPicture] = useState(null);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  const handleChange = (e) => {
    if (e.target.name === "picture") {
      const file = e.target.files[0];
      if (file) {
        console.log("Selected file:", file);
        setPicture(file);
      }
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const productData = {
      name: productName,
      gender,
      category,
      price,
      description,
      picture: picture, // Assuming you want to include the picture in the data
    };
    dispatch(addProduct(productData));

  };

  const closeModal = () => {
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div
        className="overlay fixed inset-0 bg-black opacity-50"
        onClick={closeModal}
      ></div>
      <div className="modal-content fixed w-5/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg z-50">
        <div className="w-full m-auto bg-white h-[570px] p-4 z-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Add Product</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleFormSubmit}>
            <div className="mb-2">
              <label
                htmlFor="productName"
                className="block text-sm font-medium text-gray-600"
              >
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                className="mt-1 p-2 border rounded w-full"
                value={productName}
                onChange={(e) =>
                  setProduct({ ...product, productName: e.target.value })
                }
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
              <select
                id="gender"
                name="gender"
                className="mt-1 p-2 border rounded w-full"
                value={gender}
                onChange={(e) =>
                  setProduct({ ...product, gender: e.target.value })
                }
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="mb-2">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-600"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className="mt-1 p-2 border rounded w-full"
                value={category}
                onChange={(e) =>
                  setProduct({ ...product, category: e.target.value })
                }
                required
              >
                <option value="">Select Category</option>
                <option value="makeup">Makeup</option>
                <option value="skincare">SkinCare</option>
                <option value="haircare">Haircare</option>
              </select>
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
                className="mt-1 p-2 border rounded w-full"
                value={price}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
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
                className="mt-1 p-2 border rounded w-full"
                value={description}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
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
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white w-full mb-2 p-2 rounded hover:bg-blue-700"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
