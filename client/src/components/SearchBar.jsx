import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";

const SearchBar = ({ searchTerm, setSearchTerm, userAvatarUrl }) => {
  return (
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
        {userAvatarUrl && (
          <div className="border px-1 py-1 rounded-xl hidden md:block bg-slate-100 cursor-pointer">
            <img
              src={userAvatarUrl}
              alt="User Avatar"
              className="w-8 h-8 rounded-xl"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
