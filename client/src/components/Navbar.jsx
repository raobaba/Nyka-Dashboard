import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Nyka.png";
import { TfiMenu } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Define an array of menu items
  const menuItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Services", link: "/services" },
    { title: "Login", link: "/login" },
    { title: "SignUp", link: "/signup" }
  ];

  return (
    <div className="w-full bg-white shadow-md p-4 flex justify-between ">
      {/* Logo and menu button for small screens */}
      <div className="flex justify-between w-full">
        <Link to={"/"} className="flex items-center text-lg font-bold text-blue-500">
          <img src={Logo} alt="Logo" className="h-8 mr-2" />
          Nyka
        </Link>
        <button onClick={toggleMenu} className="text-gray-700 block md:hidden hover:text-blue-500 focus:outline-none">
          {isMenuOpen ? <IoMdClose /> : <TfiMenu />}
        </button>
      </div>

      {/* Menu items for medium and large screens */}
      <div className={`md:flex md:space-x-4 ${isMenuOpen ? "flex" : "hidden"}`}>
        {/* Map over menu items and render dynamically */}
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="text-gray-700 font-semibold text-lg hover:text-blue-500 transition duration-300 ease-in-out"
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* Add close button when menu is open */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 border bg-black text-zinc-100 bg-opacity-100">
          <div className="flex flex-col items-end p-4">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              <IoMdClose />
            </button>
            {/* Map over menu items and render dynamically */}
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="text-gray-700 hover:text-blue-500 my-2"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
