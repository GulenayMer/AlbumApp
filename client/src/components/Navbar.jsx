import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed left-0 top-0 z-10 flex w-full flex-row justify-between bg-stone-700">
      <div className="p-2 text-center text-white">
        <Link to="/" className="mx-2">
          <i className="fa-solid fa-book"></i> Album Booth
        </Link>
      </div>

      <div className="block sm:hidden">
        <button
          className="flex items-center px-3 py-2 text-white"
          onClick={handleMenuToggle}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={isMenuOpen ? "hidden" : ""}
              fillRule="evenodd"
              d="M3 4h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 5h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 5h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
            />
            <path
              className={isMenuOpen ? "" : "hidden"}
              fillRule="evenodd"
              d="M10 18a1 1 0 0 1-1-1V3a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1zm-7-3a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2H3z"
            />
          </svg>
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } transition duration-300 sm:flex sm:flex-row sm:items-center`}
      >
        <ul className="flex flex-col sm:flex-row">
          <li className="px-4 py-2 text-center text-white hover:bg-stone-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2 text-center text-white hover:bg-stone-500">
            <Link to="/upload">Upload</Link>
          </li>
          <li className="px-4 py-2 text-center text-white hover:bg-stone-500">
            <Link to="/my-albums">My Albums</Link>
          </li>
          <li className="mr-5 px-4 py-2 text-center text-white hover:bg-stone-500">
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
