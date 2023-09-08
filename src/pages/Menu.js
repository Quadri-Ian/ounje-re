// Menu.js
import React from 'react';
import { useRouter } from 'next/router';
import Appetizers from './menu/appetizers';
import LocalDishes from './menu/localdishes';
import Beverages from './menu/beverages';
import Shakes from './menu/shakes';
import Link from 'next/link';

function Menunav() {
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
        return <Appetizers />;
    }
  };

  return (
    <div className='menupage'>
      <div className='flex justify-center text-2xl lg:text-5xl text-cyan-800 pb-6 pt-36'>
        <h1>MENU</h1>
      </div>
      <nav className=''>
        <ul className='flex justify-around text-neutral-800 text-lg underline md:text-2xl lg:w-[70%] mx-auto'>
          <li>
            <Link href="/menu/appetizers" passHref>
              Appetizers
            </Link>
          </li>
          <li>
            <Link href="/menu/localdishes" passHref>
              Local Dishes
            </Link>
          </li>
          <li>
            <Link href="/menu/shakes" passHref>
              Shakes
            </Link>
          </li>
          <li>
            <Link href="/menu/beverages" passHref>
              Beverages
            </Link>
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

export default Menunav;
