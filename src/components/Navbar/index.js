import React, { useState } from "react";
import { scaleRotate as Menu } from 'react-burger-menu';
import { Nav, NavLink }
    from "./NavBarElements";
import { Link } from "react-router-dom";

 
const Navbar = () => {
          // Define the styles for the scaleRotate animation
  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#b81c1d',
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
        <>
            <Nav className="bg-cyan-800 flex justify-between w-full items-center p-4">
                <ul className="hidden w-1/4 lg:flex justify-between items-center
                 list-none text-cyan-300 text-2xl"
                 >
                        {/* <li>
                        <NavLink className="active:text-cyan-100 hover:text-cyan-100" to="/about" activeStyle>
                                About
                        </NavLink>                           
                        </li> */}

                        <li>
                        <NavLink className="active:text-cyan-100 hover:text-cyan-100" to="/Menu" activeStyle>
                                Menu
                        </NavLink>                            
                        </li>

                        <li>
                        <NavLink className="active:text-cyan-100 hover:text-cyan-100" to="/reservation" activeStyle>
                                Reservation
                        </NavLink>                            
                        </li>

                        <li>
                        <NavLink className="active:text-cyan-100 hover:text-cyan-100" to="/contact" activeStyle>
                                Contact Us
                        </NavLink>                            
                        </li>


                </ul>

                      {/* Logo */}
                <div className="flex lg:w-1/4 justify-center text-center items-center">
                    <Link to="/about">
                    <h1 className="text-3xl text-cyan-300 lg:p-2 p-1 border-4 border-r-8 border-cyan-300 border-r-cyan-100 lg:border-[10px] border-r-4 rounded-l-lg lg:text-4xl font-bold">
                    OÚNJẸ R<span className="text-cyan-100">E</span>
                    </h1>                        
                    </Link>

                </div>

                {/* Order Now */}
                <div className="hidden w-1/4 lg:block lg:text-3xl text-cyan-300 ">
                <h1 className="text-right "><Link to="/menu">Order</Link></h1>
                </div>

                <button
                onClick={toggleMenu}
                className="lg:hidden text-cyan-300 text-2xl lg:text-3xl focus:outline-none"
                >
                ☰
                </button>
            </Nav>
                 {/* Nav Menu */}
                 <Menu className="bg-cyan-800  list-none text-cyan-300 p-4 font-semibold" styles={styles} right isOpen={isMenuOpen} customBurgerIcon={false}>
                <NavLink to="/about" >
                        About
                </NavLink>

                <NavLink to="/Menu" >
                        Menu
                </NavLink>

                <NavLink to="/reservation" >
                        Reservation
                </NavLink>

                <NavLink to="/order" activeStyle>
                    Order
                </NavLink>
                </Menu>              
            
        </>
    );
};
 
export default Navbar;