import React from 'react';
import {  Link, Outlet } from "react-router-dom";
import "../App.css"
// import Appetizers from '../MenuPages/appetizers';
 
function Menu() {
    return (
        <div className='bg-cyan-50 mb-14'>
            <div className='flex justify-center text-2xl lg:text-5xl text-cyan-800 my-10'>
                <h1>MENU</h1>      
            </div>
            <nav className='mb-20'>
                {/* Links to sub-pages */}
                <ul className='flex justify-around text-neutral-800 text-lg underline md:text-2xl lg:w-[70%] mx-auto'>
                    <li><Link to="/menu">Appetizers</Link></li>
                    <li><Link to="/menu/localdishes">Local Dishes</Link></li>
                    <li><Link to="/menu/shakes">Shakes</Link></li>
                    <li><Link to="/menu/beverages">Beverages</Link></li>
                </ul>
            </nav>
            {/* Render matched sub-pages */}
            
            <Outlet />
        </div>
    );
}
 
export default Menu;