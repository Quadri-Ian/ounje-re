// Menu.js
import React from 'react';
import { useRouter } from 'next/router';
import Appetizers from './appetizers';
import LocalDishes from './localdishes';
import Shakes from './shakes';
import Beverages from './beverages';
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
    <div>
      <div className='flex justify-center text-2xl lg:text-5xl text-cyan-800 mb-6 mt-36'>
        <h1>MENU</h1>
      </div>
      <nav className='mb-16 lg:mb-20'>
      <ul className='flex justify-around text-neutral-800 text-lg underline md:text-2xl lg:w-[70%] mx-auto'>
          <li>
            <Link href="/menu/appetizers">Appetizers</Link>
          </li>
          <li>
            <Link href="/menu/localdishes">Local Dishes</Link>
          </li>
          <li>
            <Link href="/menu/shakes">Shakes</Link>
          </li>
          <li>
            <Link href="/menu/beverages">Beverages</Link>
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
