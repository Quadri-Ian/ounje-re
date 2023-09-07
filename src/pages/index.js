import React from "react";
import Image from 'next/image'
import Coolbg from "../images/Newbg.jpg";
import Coolpic from "../images/cooltable2.jpg";
import Chefhold from "../images/Chefhold.jpg";
import Link from "next/link";


 
const About = () => {
    return (
        <div className="bg-cyan-50 pb-24">
            <div className="w-full relative ">
            <Image
                src={Coolbg}
                alt="Picture of the author"
                className="cardo w-full object-cover h-screen"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
                />
            <div className="flex flex-col text-lg md:text-2xl absolute inset-0 m-auto justify-center items-center">
                <h1 className="intro-text text-left w-[90%] lm:w-[70%] lg:w-1/2 text-cyan-50 italic">
                Nestled in the vibrant heart of Lagos Island, the revamped OÚNJẸ RE offers a
                 unique and revitalized Eko grill experience. Our offerings include a delightful 
                 build-your-own pickle bar, 
                a carefully curated selection of beer and wine, and an expansive outdoor garden patio for you to enjoy.
                    <br></br>
                </h1>
                    <span className="text-cyan-100 text-center flex justfy-center items-center text-sm md:text-3xl">-ADAM LEVINE-</span> 
            </div>  
           
            </div>

            <div id="about" className=""></div>

            <h2 className="text-cyan-800 text-3xl md:text-6xl mt-36 my-20 text-center underline italic">Country food est 1951</h2>

            <div className="aboutt text-center md:border-[40px] border-cyan-800  mx-auto md:flex justify-center flex-row-reverse  items-center lm:h-1/2 lm:bg-cyan-800">
                <div className="lg:w-1/3 ">
                <p className="aboutt lm:text-lg lg:text-1xl text-cyan-800 lm:text-cyan-200">
                At OÚNJẸ RE, we pride ourselves on crafting menus that draw inspiration 
                from the changing seasons, allowing us to showcase the finest seafood and 
                meats sourced locally from the Gulf coast and beyond. Our raw bar is a true 
                treasure trove, featuring a diverse selection of oysters and rare culinary 
                delights, including O-toro fatty tuna, Uni, Imperial Golden Ossetra caviar, 
                soft shell crab, and, when in season, local stone crab claws.
                Our menu caters to every palate, offering options ranging from classic, 
                simply prepared fish dishes to indulgent multi-course experiences with a 
                variety of shareable small plates. Join us for one of the city's premier 
                Happy Hour experiences, available Tuesday through Friday from 4:00 p.m. to 
                9:00 p.m., and don't miss our exclusive Bivalves & Bubbles event on Saturdays 
                and 
                Sundays from 4:00 p.m. to 10:00 p.m. It's the perfect opportunity to savor 
                the finest flavors in town.
                </p>
                </div>
                <div className="lg:w-1/3 h-1/2">
                <Image
                    src={Coolpic}
                    alt="Picture of the author"
                    className="object-cover md:border-8 border-cyan-200"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    />                
    </div>

            </div>

            <div className="md:flex space-y-6 justify-center mx-auto items-center mt-44 w-full">
                    <div className="grid gap-y- text-center items-center flex-1
                    list-none w-full justify-center text-[#272727] text-2xl"
                    >
                            <Link className="border-4 border-dashed border-cyan-800 text-cyan-600" href="/menu" activeStyle>
                            <hr class="w-1 h-12 md:h-20 mx-auto bg-cyan-800 border-0 rounded  dark:bg-cyan-800"/>
                                    Menu
                                    <hr class="w-1 h-12 md:h-20 mx-auto bg-cyan-800 border-0 rounded  dark:bg-cyan-800"/>
                            </Link>

                            <Link className="border-4 border-dashed border-cyan-800 text-cyan-600" href="/reservation" activeStyle>
                            <hr class="w-1 h-12 md:h-20 mx-auto bg-cyan-800 border-0 rounded  dark:bg-cyan-800"/>
                                    Reservation
                                    <hr class="w-1 h-12 md:h-20 mx-auto bg-cyan-800 border-0 rounded  dark:bg-cyan-800"/>
                            </Link>

                            <Link className="border-4 border-cyan-800 border-dashed text-cyan-600" href="/order" activeStyle>
                            <hr class="w-1 h-12 md:h-20 mx-auto  bg-cyan-800 border-0 rounded dark:bg-cyan-800"/>

                                    Order
                                    <hr class="w-1 h-12 md:h-20 mx-auto bg-cyan-800 border-0 rounded  dark:bg-cyan-800"/>
                            </Link>

                    </div>

                <div className="flex justify-center  md:w-[60%] lg:w-[80%] lg:flex-1">
                    <Image
                    src={Chefhold}
                    alt="Picture of the author"
                    className="border-8 w-full border-cyan-800 border-r-[30px] border-dashed border-r-cyan-800 relative"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    />                
                </div>
            </div>
        </div>
    );
};
 
export default About;