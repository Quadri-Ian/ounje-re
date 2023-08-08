import React from "react";
import "../App.css"
import "../index.css"
import Coolbg from "../images/dinerpic.avif"
import Coolpic from "../images/cooltable2.jpg"
import { NavLink, NavMenu } from "../components/Navbar/NavBarElements"
import Kitchenimg from "../images/Kitchen.avif"

 
const About = () => {
    return (
        <div className="bg-cyan-50 pb-24">
            <div className="w-full relative">
                <img className="w-full object-cover h-screen" src={Coolbg} alt="cool-pic"/>
            <div className="flex flex-col text-lg md:text-2xl absolute inset-0 m-auto justify-center items-center">
                <h1 className="intro-text text-left w-[90%] lg:w-1/2 text-cyan-200 italic">
                    "Located in the heart of West Adams, the second iteration of Mizlala is a 
                    fresh take on the neighborhood Mediterranean grill, complete with build your own 
                    pickle bar, beer and wine, and an expansive outdoor garden patio." 
                    <br></br>
                </h1>
                    <span className="text-cyan-300 text-center flex justfy-center items-center text-sm md:text-3xl">-ADAM LEVINE-</span> 
            </div>  
           
            </div>

            <h2 className="text-cyan-300 text-6xl my-20 text-center underline italic">About</h2>

            <div className="aboutt text-center md:border-[40px] border-cyan-800  mx-auto md:flex justify-center flex-row-reverse  items-center lg:h-1/2 lg:bg-cyan-800">
                <div className="lg:w-1/3 ">
                <p className="aboutt lg:text-2xl">
                    1751 offers seasonally inspired menus featuring the highest quality
                     seafood and meats available from the local Gulf coast and beyond.
                      Our full raw bar features several different varieties of oysters
                       and rare delicacies such as and O-toro fatty tuna, Uni, Imperial
                        Golden Ossetra caviar, soft shell crab, and local stone crabclaws 
                        when available. There is something for every diner — from a 
                        traditional dining experience with simply prepared fish to a 
                        multi-course experience of shareable small plates. One of the best
                         Happy Hour destinations in town; Tuesday -Friday from 4:00p.m to 
                         6:00p.m. and Bivalves & Bubbles from 4:00p.m-5:00p.m. on Saturday’s
                </p>
                </div>
                <div className="lg:w-1/3 h-1/2">
                         <img className="object-cover md:border-8 border-cyan-200" src={Coolpic} alt="cool-pic"/>
                </div>

            </div>

            <div className="md:flex justify-center items-center mt-12">
                <div className="md:w-1/3 mb-4">
                <NavMenu className="grid gap-y- text-center justify-center items-center
                 list-none text-[#272727] text-2xl"
                 >
                        <NavLink className="border-4 border-dashed border-cyan-800 text-cyan-600" to="/Menu" activeStyle>
                        <hr class="w-1 h-14 mx-auto bg-cyan-800 border-0 rounded  dark:bg-cyan-800"/>
                                Menu
                                <hr class="w-1 h-14 mx-auto bg-cyan-800 border-0 rounded  dark:bg-cyan-800"/>
                        </NavLink>

                        <NavLink className="border-4 border-dashed border-cyan-800 text-cyan-600" to="/reservation" activeStyle>
                        <hr class="w-1 h-14 mx-auto bg-cyan-800 border-0 rounded  dark:bg-cyan-800"/>
                                Reservation
                                <hr class="w-1 h-14 mx-auto bg-cyan-800 border-0 rounded  dark:bg-cyan-800"/>
                        </NavLink>

                        <NavLink className="border-4 border-cyan-800 border-dashed text-cyan-600" to="/order" activeStyle>
                        <hr class="w-1 h-14 mx-auto  bg-cyan-800 border-0 rounded dark:bg-cyan-800"/>

                                Order
                                <hr class="w-1 h-14 mx-auto bg-cyan-800 border-0 rounded  dark:bg-cyan-800"/>
                        </NavLink>

                </NavMenu>
                </div>

                <div className="md:1/3">
                    <img className="h-full border-8 border-cyan-800 border-r-[30px] border-dashed border-r-cyan-100" src={Kitchenimg} alt="kitchen-img"/>
                </div>
            </div>
        </div>
    );
};
 
export default About;