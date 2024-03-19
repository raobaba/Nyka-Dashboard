import React from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { SiGoogleanalytics } from "react-icons/si";
import { CiLogout } from "react-icons/ci";

const Sidebar = ({ activeContent, handleButtonClick, handleLogout }) => {
  return (
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
  );
};

export default Sidebar;
