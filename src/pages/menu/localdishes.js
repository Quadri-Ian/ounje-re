import React from 'react';
import Link from 'next/link';
 
function LocalDishes() {
    return (
        <div className='pb-24 pt-16 lm:pt-20 '>
        <div className='flex justify-center text-2xl lg:text-5xl text-cyan-800 my-10'>       
        <h1>MENU</h1>
      </div>
      <nav className='mb-20'>
      <ul className='flex justify-around text-neutral-800 text-lg underline md:text-2xl lg:w-[70%] mx-auto'>
        <li>
          <Link href="/menu">Appetizers</Link>
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
        <div className=' grid md:grid-cols-2 gap-8  text-neutral-700 lg:w-[70%] justify-center mx-auto'>
            <div className='text-center '>
                <h2 className='text-lg font-semibold py-1 text-cyan-800'>Buffalo Beef on ‘Weck</h2>
                <p>
                Tender sliced roast beef, kimmelweck roll,<br/>
                horseradish, chips & pickles
                </p>
                <p className='font-semibold text-cyan-800'>
                    CROCK $6
                </p>
            </div>
            <div className='text-center '>
                <h2 className='text-lg font-semibold py-1 text-cyan-800'>Open Grilled Reuben</h2>
                <p>
                Corned beef, sauerkraut, 1000 island dressing, <br/>
                melted swiss on rye bread, chips & pickles
                </p>
                <p className='font-semibold text-cyan-800'>
                    ~$10~
                </p>
            </div>
            <div className='text-center '>
                <h2 className='text-lg font-semibold py-1 text-cyan-800'>Signature Eagle Burger</h2>
                <p>
                ½ lb burger, cheddar cheese, Applewood bacon,<br/>
                lettuce, tomato chips & pickles
                </p>
                <p className='font-semibold text-cyan-800'>
                    ~$9~
                </p>
            </div>
            <div className='text-center '>
                <h2 className='text-lg font-semibold py-1 text-cyan-800'>Hot Open Sliced Turkey Sandwich</h2>
                <p>
                In house roasted turkey breast, sliced & served
                open faced over fresh white bread, with pan
                gravy, cranberry sauce, choice of side
                </p>
                <p className='font-semibold text-cyan-800'>
                    ~$12~
                </p>
            </div>
            <div className='text-center '>
                <h2 className='text-lg font-semibold py-1 text-cyan-800'>Herb Roasted Half Chicken</h2>
                <p>
                Slow roasted half chicken, <br/>pan gravy,
                applesauce and choice of side
                </p>
                <p className='font-semibold text-cyan-800'>
                    ~$9~
                </p>
            </div>
            <div className='text-center '>
                <h2 className='text-lg font-semibold py-1 text-cyan-800'>Grilled Tavern Sirloin</h2>
                <p>
                Filet of sirloin 8 oz steak, grilled<br/> to your liking,
                served with au jus & choice of side 
                </p>
                <p className='font-semibold text-cyan-800'>
                    ~$14~
                </p>
            </div>
            <div className='text-center '>
                <h2 className='text-lg font-semibold py-1 text-cyan-800'>Baked Haddock Casino</h2>
                <p>
                Fresh fillet topped with casino style<br/> topping of toasted
                bread crumbs, garlic, sweet bell peppers,<br/> onion
                & bacon, oven baked, choice of side                </p>
                <p className='font-semibold text-cyan-800'>
                    ~$13~
                </p>
            </div>
            <div className='text-center '>
                <h2 className='text-lg font-semibold py-1 text-cyan-800'>Broiled Fresh Haddock</h2>
                <p>
                oven baked w/lemon & white wine, with lemon,
                coleslaw, choice of side 
                </p>
                <p className='font-semibold text-cyan-800'>
                    ~$7~
                </p>
            </div>
            <div className='text-center '>
                <h2 className='text-lg font-semibold py-1 text-cyan-800'>Grilled Tavern Sirloin</h2>
                <p>
                Filet of sirloin 8 oz steak, grilled to<br/> your liking,
                served with au jus & choice of side                </p>
                <p className='font-semibold text-cyan-800'>
                    ~$11~
                </p>
            </div>
            <div className='text-center '>
                <h2 className='text-lg font-semibold py-1 text-cyan-800'>Chicken Caesar Salad</h2>
                <p>
                Romaine lettuce, sliced chicken, parmesan<br/>
                cheese, homemade croutons, veggie<br/> garnishes,
                Caesar dressing.
                </p>
                <p className='font-semibold text-cyan-800'>
                    ~$10~
                </p>
            </div>
            <div className='text-center '>
                <h2 className='text-lg font-semibold py-1 text-cyan-800'>Pecan Chicken Salad</h2>
                <p>
                Fresh greens, chicken salad made with <br/>apricot
                mayo topped with pecans, garnished <br/>with
                fresh fruit & veggies
                </p>
                <p className='font-semibold text-cyan-800'>
                    ~$9~
                </p>
            </div>
            <div className='text-center '>
                <h2 className='text-lg font-semibold py-1 text-cyan-800'>Brown Derby Cobb Salad</h2>
                <p>
                Fresh greens, diced chicken, crumbly blue cheese,<br/>
                bacon, tomatoes, chopped egg, chi chi beans<br/>
                Cobb with Salmon
                </p>
                <p className='font-semibold text-cyan-800'>
                    ~$12~
                </p>
            </div>
        </div>
     </div>       
    );

;}
 
export default LocalDishes;