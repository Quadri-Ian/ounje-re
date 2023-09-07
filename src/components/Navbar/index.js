import React, { useState } from "react";
import { scaleRotate as Menu } from 'react-burger-menu';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

 
const Navbar = () => {
          // Define the styles for the scaleRotate animation
  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '100px',
      top: '55px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      position: 'fixed',
      width: '66px',
      height: '60px',
      right: '60px',
      top: '20px'
    },
    bmCross: {
      background: '#67e8f9',
      marginTop: '15px',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      top: '0',
      bottom: '0'

    },
    bmMenu: {
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },

    bmItem: {
      display: 'flex'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };
    return (
        <div className=" fixed z-50 w-[95%] mx-auto left-0 right-0 top-4">
            <div className="bg-cyan-800 flex justify-between w-full items-center h-12 md:h-16 py-2 lm:py-2 rounded-full lg:h-20 lg:py-4 shadow-md shadow-cyan-900 px-4 lg:px-8 lm:px-4">
                <ul className="hidden flex-1  lm:flex space-x-4 items-center
                 list-none text-cyan-300 text-lg lg:text-2xl"
                 >
                        <li>
                        <Link className="NavLink" href="#about" >
                                About
                        </Link>                           
                        </li>

                        <li>
                        <Link className="NavLink" href="/menu" >
                                Menu
                        </Link>                            
                        </li>

                        <li>
                        <Link className="NavLink" href="/reservation" >
                                Reservation
                        </Link>                            
                        </li>

                        <li>
                        <Link className="NavLink" href="#footer" >
                                Contact Us
                        </Link>                            
                        </li>


                </ul>

                      {/* Logo */}
                <div className="flex lm:flex-1 justify-center text-center items-center">
                    <Link href="/">
                    <h1 className="text-lg md:text-2xl text-cyan-300 lg:p-2 p-1 border-2 border-r-8 border-cyan-300 border-r-cyan-100 lm:border-[6px] lm:border-r-[12px] rounded-l-lg lg:text-4xl font-bold">
                    OÚNJẸ R<span className="text-cyan-100">E</span>
                    </h1>                        
                    </Link>

                </div>

                {/* Order Now */}
                <div className="hidden flex-1 lm:flex text-lg lg:text-2xl text-cyan-300 items-center justify-end gap-x-6">
                  <div className="relative">
                    <FontAwesomeIcon icon={faShoppingBasket}/>
                    <p className="rounded-full bg-red-600 text-white text-sm items-center text-center absolute z-10 -right-2 top-0 px-1">6</p>
                  </div>
                <h1 className="text-right "><Link href="/order">Order</Link></h1>
                </div>
                <div className="lm:hidden flex space-x-4">
                <div className="relative  text-white">
                    <div className="text-2xl"><FontAwesomeIcon icon={faShoppingBasket}/></div>
                    <p className="rounded-full bg-red-600 text-white text-[8px] items-center text-center absolute z-10 -right-1 top-0 px-1">6</p>
                  </div>

                <button
                onClick={toggleMenu}
                className=" text-cyan-300 text-2xl lg:text-4xl focus:outline-none"
                >
                ☰
                </button>                  
                </div>

            </div>
                 {/* Nav Menu */}
                 <Menu className="Menu space-y-4" styles={styles} right isOpen={isMenuOpen} customBurgerIcon={false}>
                <Link className="NavLink" href="#about" >
                        About
                </Link>

                <Link className="NavLink" href="/menu" >
                        Menu
                </Link>

                <Link className="NavLink" href="/reservation" >
                        Reservation
                </Link>

                <Link className="NavLink" href="/order" >
                    Order
                </Link>

                <Link className="NavLink" href="#footer" >
                                Contact Us
                        </Link>
                </Menu>              
            
        </div>
    );
};
 
export default Navbar;