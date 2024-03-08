import React, { useState } from "react";
import Analytics from "./Analytics";
import { RxDashboard } from "react-icons/rx";
import { SiGoogleanalytics } from "react-icons/si";
import { CiLogout } from "react-icons/ci";
import { IoIosNotifications, IoIosArrowForward } from "react-icons/io";
import { CiSearch, CiUser } from "react-icons/ci";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import AddProductModal from "./AddProductModal";
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/user.actions';
import { Link } from "react-router-dom";

function Dashboard() {
  const [activeContent, setActiveContent] = useState("dashboard");
  const [isAddProductModalOpen, setAddProductModalOpen] = useState(false);
  const dispatch = useDispatch();

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

  return (
    <div className="w-full border h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="h-60 w-full md:w-1/6 p-4 flex flex-col justify-between ">
        <h2 className="text-2xl font-bold cursor-pointer mb-4"><Link to={'/'}>Nyka Dashboard</Link></h2>
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
          <button onClick={handleLogout} className="flex items-center hover:bg-gray-300 p-2 rounded">
            <CiLogout className="mr-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 bg-gray-100">
        {activeContent === "dashboard" && (
          <div>
            {/* Content for the Dashboard */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center h-10 mb-4">
              <div className="flex items-center border w-full md:w-7/12 h-full bg-white rounded-xl mb-2 md:mb-0">
                <CiSearch className="ml-2" />
                <input
                  type="text"
                  className="w-full h-full border-none rounded-xl outline-none p-2"
                  placeholder="Search..."
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
                  name=""
                  id=""
                >
                  <option value="">Filter By Gender</option>
                  <option value="male">MALE</option>
                  <option value="female">FEMALE</option>
                </select>
                <select
                  className="w-full md:w-auto bg-white border border-gray-300 rounded-lg p-2 mt-2 md:mt-0 md:ml-4 focus:outline-none"
                  name=""
                  id=""
                >
                  <option value="">Filter By Category</option>
                  <option value="makeup">MAKEUP</option>
                  <option value="skincare">SKINCARE</option>
                  <option value="haircare">HAIRCARE</option>
                </select>
                <select
                  className="w-full md:w-auto bg-white border border-gray-300 rounded-lg p-2 mt-2 md:mt-0 md:ml-4 focus:outline-none"
                  name=""
                  id=""
                >
                  <option value="">Sort By Price</option>
                  <option value="ascending">ASCENDING</option>
                  <option value="descending">DESCENDING</option>
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

            <div className="w-full border h-auto min-h-96 mt-10 bg-white">
              <div className="flex justify-between mt-2">
                <p className="ml-12 font-semibold">Latest Order</p>
                <div className="flex mr-10 cursor-pointer">
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
                    <tr className="hover:bg-gray-50 text-center border-b transition duration-300">
                      <td className="py-2 px-4 whitespace-nowrap">Product A</td>
                      <td className="py-2 px-4 whitespace-nowrap">Male</td>
                      <td className="py-2 px-4 whitespace-nowrap">Clothing</td>
                      <td className="py-2 px-4 whitespace-nowrap">$29.99</td>
                      <td className="py-2 px-4 whitespace-nowrap">
                        Lorem ipsum dolor sit amet
                      </td>
                      <td className="py-2 px-4 whitespace-nowrap ">
                        <div className="text-blue-500 hover:underline flex gap-2">
                          <FiEdit3 className="text-lg cursor-pointer ml-4 " />
                          <MdOutlineDeleteOutline className="text-xl cursor-pointer" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        {activeContent === "analytics" && (
          <div>
            <Analytics />
          </div>
        )}
      </div>
      <AddProductModal
        isOpen={isAddProductModalOpen}
        onClose={closeAddProductModal}
      />
    </div>
  );
}

export default Dashboard;
