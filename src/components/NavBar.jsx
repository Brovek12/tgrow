import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center relative">
      <h1 className="text-white text-lg font-bold">Talent Growth Test</h1>
      <div className="relative">
        <FaBars className="text-white text-xl cursor-pointer" onClick={toggleMenu} />
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg">
            <Link 
              to="/" 
              className="block px-4 py-2 text-white hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Number 1
            </Link>
            <Link 
              to="/page2" 
              className="block px-4 py-2 text-white hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Number 2
            </Link>

            <Link 
              to="/page4" 
              className="block px-4 py-2 text-white hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Number 3 4 5 and 6
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
