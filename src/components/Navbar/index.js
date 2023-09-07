import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Add the faTimes icon

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed z-50 w-full top-4 left-0">
      <div className="bg-cyan-800 flex justify-between mx-2 items-center h-12 md:h-16 py-2 rounded-full lg:h-20 lg:py-4 shadow-md shadow-cyan-900 px-4 lg:px-8">

      <ul className="hidden lm:flex flex-1 space-x-4 items-center list-none text-cyan-300 text-lg lg:text-2xl">
          <li>
            <Link className="NavLink" href="#about">
              About
            </Link>
          </li>

          <li>
            <Link className="NavLink" href="/menu">
              Menu
            </Link>
          </li>

          <li>
            <Link className="NavLink" href="/reservation">
              Reservation
            </Link>
          </li>

          <li>
            <Link className="NavLink" href="#footer">
              Contact Us
            </Link>
          </li>
        </ul>

      <div className="lm:hidden flex space-x-4">
          <div className="relative text-cyan-300">
            <div className="text-2xl">
              <FontAwesomeIcon icon={faShoppingBasket} />
            </div>
            <p className="rounded-full bg-red-600 text-white text-[8px] items-center text-center absolute z-10 -right-1 top-0 px-1">
              6
            </p>
          </div>
        </div>

        {/* Logo */}
        <div className="flex lm:flex-1 z-10 justify-center text-center items-center">
          <Link href="/">
            <h1 className="text-lg md:text-2xl text-cyan-300 lg:p-2 p-1 border-2 border-r-8 border-cyan-300 border-r-cyan-100 lm:border-[6px] lm:border-r-[12px] rounded-l-lg lg:text-4xl font-bold">
              OÚNJẸ R<span className="text-cyan-100">E</span>
            </h1>
          </Link>
        </div>

        {/* Hamburger button for smaller screens */}
        <button
          className="lm:hidden text-cyan-300 z-10 hover:text-cyan-100 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <FontAwesomeIcon icon={faTimes} className="text-2xl" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          )}
        </button>

        {/* Menu for smaller screens */}
        {isMenuOpen && (
          <div className="lg:hidden fixed top-0 right-0 h-screen w-[70%] bg-cyan-800 text-cyan-300 text-lg flex flex-col justify-center items-center space-y-4 shadow-lg transform translate-x-0 transition-transform ease-in-out duration-300">
            <button
              className="absolute top-4 right-4 text-cyan-300 hover:text-cyan-100 focus:outline-none"
              onClick={toggleMenu}
            >
              {/* <FontAwesomeIcon icon={faTimes} className="text-2xl" /> */}
            </button>
            <Link href="#about">About</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/reservation">Reservation</Link>
            <Link href="#footer">Contact Us</Link>
          </div>
        )}



        {/* Order Now */}
        <div className="hidden flex-1 lm:flex text-lg lg:text-2xl text-cyan-300 items-center justify-end gap-x-6">
          <div className="relative">
            <FontAwesomeIcon icon={faShoppingBasket} />
            <p className="rounded-full bg-red-600 text-white text-sm items-center text-center absolute z-10 -right-2 top-0 px-1">
              6
            </p>
          </div>
          <h1 className="text-right ">
            <Link href="/order">Order</Link>
          </h1>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
