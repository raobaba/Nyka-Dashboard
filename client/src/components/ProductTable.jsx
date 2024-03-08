import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";

function ProductTable({ loading, error, products, onDeleteProduct }) {
  return (
    <div className="w-full border h-auto min-h-96 mt-10 bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between mt-2">
        <p className="ml-4 md:ml-12 font-semibold">Latest Order</p>
        <div className="flex mt-2 md:mt-0 mr-4 md:mr-10 cursor-pointer">
          <p className="font-semibold">More </p>
          <IoIosArrowForward className="mt-1 text-xl" />
        </div>
      </div>
      <div className="w-11/12 m-auto mt-2 h-full overflow-auto">
        <table className="w-full rounded-xl table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4">Products</th>
              <th className="py-2 px-4">Gender</th>
              <th className="py-2 px-4">Category</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Description</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="6" className="text-center text-red-500 py-4">
                  Error: {error}
                </td>
              </tr>
            ) : products && products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-50 text-center border-b transition duration-300"
                >
                  {/* Display product details here */}
                  <td className="py-2 px-4 whitespace-nowrap">
                    <div className="flex gap-1 items-center">
                      <div className="w-8 h-8 border rounded-full bg-slate-100 ali flex items-center justify-center">
                        <img
                          src={product.picture.url}
                          alt="Pic"
                          className="w-5 h-5 rounded-full"
                        />
                      </div>
                      <p>{product.name}</p>
                    </div>
                  </td>
                  <td className="py-2 px-4 whitespace-nowrap">
                    {product.gender}
                  </td>
                  <td className="py-2 px-4 whitespace-nowrap">
                    {product.category}
                  </td>
                  <td className="py-2 px-4 whitespace-nowrap">
                    ${product.price}
                  </td>
                  <td className="py-2 px-4 whitespace-nowrap">
                    {product.description}
                  </td>
                  <td className="py-2 px-4 whitespace-nowrap ">
                    <div className="text-blue-500 hover:underline flex gap-2">
                      <FiEdit3 className="text-lg cursor-pointer ml-4" />
                      <MdOutlineDeleteOutline
                        onClick={() => onDeleteProduct(product.id)}
                        className="text-xl cursor-pointer"
                      />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTable;
