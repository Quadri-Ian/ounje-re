// Menu.js

import React from 'react';
import { useRouter } from 'next/router';
import Appetizers from './appetizers';
import LocalDishes from './localdishes';
import Shakes from './shakes';
import Beverages from './beverages';
import Link from 'next/link';

function Menu() {
  const router = useRouter();
  const { subpage } = router.query;

  const renderSubpage = () => {
    switch (subpage) {
      case 'appetizers':
        return <Appetizers />;
      case 'localdishes':
        return <LocalDishes />;
      case 'shakes':
        return <Shakes />;
      case 'beverages':
        return <Beverages />;
      default:
        return <Appetizers />; // Default to appetizers if no subpage specified
    }
  };

  return (
    <div>
      {/* Your menu content */}
      <div className='flex justify-center text-2xl lg:text-5xl text-cyan-800  mb-6 mt-36'>
        <h1>MENU</h1>
      </div>
      <nav className='mb-16 lm:mb-20'>
        <ul className='flex space-x-1 justify-around  underline md:text-2xl lg:w-[70%] mx-auto'>
          <li>
            <Link className='menulink no-underline' href="menu/appetizers">Appetizers</Link>
          </li>
          <li>
            <Link className='menulink' href="menu/localdishes">Local Dishes</Link>
          </li>
          <li>
            <Link className='menulink' href="menu/shakes">Shakes</Link>
          </li>
          <li>
            <Link className='menulink' href="menu/beverages">Beverages</Link>
          </li>
        </ul>
      </nav>
      <div>
        {/* Display the subpage component */}
        {renderSubpage()}
      </div>
    </div>
  );
}

export default Menu;
