import React from "react";
import Image from 'next/image'
import Coolbg from "../images/Newbg.jpg";
import Coolpic from "../images/cooltable2.jpg";
import Chefhold from "../images/Chefhold.jpg";
import Link from "next/link";
import ImageGallery from "../components/imagegallery";


 
const About = () => {
    const images = [
        { src: 'https://images.pexels.com/photos/8360220/pexels-photo-8360220.jpeg?cs=srgb&dl=pexels-enesfi%CC%87lm-8360220.jpg&fm=jpg&_gl=1*clxhf5*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjM3MDUuMC4wLjA.', alt: 'Image 1' },
        { src: 'https://images.pexels.com/photos/7474163/pexels-photo-7474163.jpeg?cs=srgb&dl=pexels-valeria-boltneva-7474163.jpg&fm=jpg&_gl=1*46r742*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjM3NjkuMC4wLjA.', alt: 'Image 2' },
        { src: 'https://images.pexels.com/photos/7538076/pexels-photo-7538076.jpeg?cs=srgb&dl=pexels-dmitriy-ganin-7538076.jpg&fm=jpg&_gl=1*pbd3jj*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjQyOTguMC4wLjA.', alt: 'Image 2' },
        { src: 'https://images.pexels.com/photos/18176513/pexels-photo-18176513.jpeg?cs=srgb&dl=pexels-godwin-torres-18176513.jpg&fm=jpg&_gl=1*1pmzcmn*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjQzMzguMC4wLjA.', alt: 'Image 2' },
        { src: 'https://images.pexels.com/photos/9605307/pexels-photo-9605307.jpeg?cs=srgb&dl=pexels-ehioma-osih-9605307.jpg&fm=jpg&_gl=1*iog6ph*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjQzOTcuMC4wLjA.', alt: 'Image 2' },
        { src: 'https://images.pexels.com/photos/17568754/pexels-photo-17568754.jpeg?cs=srgb&dl=pexels-nadin-sh-17568754.jpg&fm=jpg&_gl=1*1vtj8x5*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjQ0MzQuMC4wLjA.', alt: 'Image 2' },
        { src: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?cs=srgb&dl=pexels-engin-akyurt-2673353.jpg&fm=jpg&_gl=1*1jc1dlc*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjQ0NzIuMC4wLjA.', alt: 'Image 2' },
        { src: 'https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?cs=srgb&dl=pexels-mister-mister-3434523.jpg&fm=jpg&_gl=1*1jc1dlc*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjQ0NzIuMC4wLjA.', alt: 'Image 2' },
        { src: 'https://images.pexels.com/photos/2878738/pexels-photo-2878738.jpeg?cs=srgb&dl=pexels-jonathan-borba-2878738.jpg&fm=jpg&_gl=1*19bkxje*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjQ0NzIuMC4wLjA.', alt: 'Image 2' },
        { src: 'https://images.pexels.com/photos/2302809/pexels-photo-2302809.jpeg?cs=srgb&dl=pexels-vincent-ma-janssen-2302809.jpg&fm=jpg&_gl=1*19bkxje*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjQ0NzIuMC4wLjA.', alt: 'Image 2' },
        { src: 'https://images.pexels.com/photos/2555240/pexels-photo-2555240.jpeg?cs=srgb&dl=pexels-vincent-rivaud-2555240.jpg&fm=jpg&_gl=1*f1uj1q*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjQ0NzIuMC4wLjA.', alt: 'Image 2' },
        { src: 'https://images.pexels.com/photos/15881378/pexels-photo-15881378.jpeg?cs=srgb&dl=pexels-julias-torten-und-t%C3%B6rtchen-15881378.jpg&fm=jpg&_gl=1*mr96wk*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjQ0NzIuMC4wLjA.', alt: 'Image 2' },
        { src: 'https://images.pexels.com/photos/5836780/pexels-photo-5836780.jpeg?cs=srgb&dl=pexels-roman-odintsov-5836780.jpg&fm=jpg&_gl=1*mr96wk*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjQ0NzIuMC4wLjA.', alt: 'Image 2' },
        { src: 'https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg?cs=srgb&dl=pexels-on-shot-2789328.jpg&fm=jpg&_gl=1*10twxbl*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjQ3NTAuMC4wLjA.', alt: 'Image 2' },
        { src: 'https://images.pexels.com/photos/1484678/pexels-photo-1484678.jpeg?cs=srgb&dl=pexels-t-dw-1484678.jpg&fm=jpg&_gl=1*1qarvqj*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjQ3NTAuMC4wLjA.', alt: 'Image 2' },
        { src: 'https://images.pexels.com/photos/1459338/pexels-photo-1459338.jpeg?cs=srgb&dl=pexels-lina-kivaka-1459338.jpg&fm=jpg&_gl=1*2148j0*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjQ3NTAuMC4wLjA.', alt: 'Image 2' },
        { src: 'https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg?cs=srgb&dl=pexels-toni-cuenca-616836.jpg&fm=jpg&_gl=1*1gpo1i9*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjQ5MTEuMC4wLjA.', alt: 'Image 2' },
        { src: 'https://images.pexels.com/photos/2611814/pexels-photo-2611814.jpeg?cs=srgb&dl=pexels-anna-tukhfatullina-food-photographerstylist-2611814.jpg&fm=jpg&_gl=1*wmanf9*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjQ5MTEuMC4wLjA.', alt: 'Image 2' },
        { src: 'https://images.pexels.com/photos/4279096/pexels-photo-4279096.jpeg?cs=srgb&dl=pexels-helena-lopes-4279096.jpg&fm=jpg&_gl=1*wmanf9*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjQ5MTEuMC4wLjA.', alt: 'Image 2' },
        { src: 'https://images.pexels.com/photos/7601305/pexels-photo-7601305.jpeg?cs=srgb&dl=pexels-los-muertos-crew-7601305.jpg&fm=jpg&_gl=1*1flxrx5*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjUxMjcuMC4wLjA.', alt: 'Image 2' },
        // { src: 'https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1833349.jpg&fm=jpg&_gl=1*rkz9gi*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjUxNzcuMC4wLjA.', alt: 'Image 2' },
        // { src: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?cs=srgb&dl=pexels-iina-luoto-1211887.jpg&fm=jpg&_gl=1*gb22n2*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjUxNzcuMC4wLjA.', alt: 'Image 2' },
        // { src: 'https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg?cs=srgb&dl=pexels-kyle-roxas-2122294.jpg&fm=jpg&_gl=1*qcx344*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjUxNzcuMC4wLjA.', alt: 'Image 2' },
        // { src: 'https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?cs=srgb&dl=pexels-chevanon-photography-323682.jpg&fm=jpg&_gl=1*qcx344*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjUxNzcuMC4wLjA.', alt: 'Image 2' },
        // { src: 'https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?cs=srgb&dl=pexels-gerald-jake-abangan-2689419.jpg&fm=jpg&_gl=1*1vc6xyi*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjUxNzcuMC4wLjA.', alt: 'Image 2' },
        // { src: 'https://images.pexels.com/photos/551997/pexels-photo-551997.jpeg?cs=srgb&dl=pexels-foodie-factor-551997.jpg&fm=jpg&_gl=1*1vc6xyi*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjUxNzcuMC4wLjA.', alt: 'Image 2' },
        // { src: 'https://images.pexels.com/photos/4940719/pexels-photo-4940719.jpeg?cs=srgb&dl=pexels-maria-orlova-4940719.jpg&fm=jpg&_gl=1*5xsobx*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjUxNzcuMC4wLjA.', alt: 'Image 2' },
        // { src: 'https://images.pexels.com/photos/8753745/pexels-photo-8753745.jpeg?cs=srgb&dl=pexels-team-picsfast-8753745.jpg&fm=jpg&_gl=1*5xsobx*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjUxNzcuMC4wLjA.', alt: 'Image 2' },
        // { src: 'https://images.pexels.com/photos/2878741/pexels-photo-2878741.jpeg?cs=srgb&dl=pexels-jonathan-borba-2878741.jpg&fm=jpg&_gl=1*1fdjtc3*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjUxNzcuMC4wLjA.', alt: 'Image 2' },
        // { src: 'https://images.pexels.com/photos/5745669/pexels-photo-5745669.jpeg?cs=srgb&dl=pexels-ryutaro-tsukata-5745669.jpg&fm=jpg&_gl=1*1pc9rbt*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjUxNzcuMC4wLjA.', alt: 'Image 2' },
        // { src: 'https://images.pexels.com/photos/17138053/pexels-photo-17138053.jpeg?cs=srgb&dl=pexels-valeria-boltneva-17138053.jpg&fm=jpg&_gl=1*1jzt3yu*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjUxNzcuMC4wLjA.', alt: 'Image 2' },
        // { src: 'https://images.pexels.com/photos/1332275/pexels-photo-1332275.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1332275.jpg&fm=jpg&_gl=1*ppi4qa*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDEyMzQwNi4xNy4xLjE2OTQxMjUxNzcuMC4wLjA.', alt: 'Image 2' },
        // { src: 'https://images.pexels.com/photos/1673876/pexels-photo-1673876.jpeg?cs=srgb&dl=pexels-thuyen-vu-1673876.jpg&fm=jpg&_gl=1*1svholw*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDE0MzMzMS4xOS4xLjE2OTQxNDM0MTMuMC4wLjA.', alt: 'Image 2' },
        // { src: 'https://images.pexels.com/photos/16710260/pexels-photo-16710260.jpeg?cs=srgb&dl=pexels-nati-16710260.jpg&fm=jpg&_gl=1*9c25i8*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDE0MzMzMS4xOS4xLjE2OTQxNDM0MTMuMC4wLjA.', alt: 'Image 2' },
        // { src: 'https://images.pexels.com/photos/8753745/pexels-photo-8753745.jpeg?cs=srgb&dl=pexels-team-picsfast-8753745.jpg&fm=jpg&_gl=1*eu5fan*_ga*MTcxMDIyMzYwOS4xNjY5ODIyODEx*_ga_8JE65Q40S6*MTY5NDE0MzMzMS4xOS4xLjE2OTQxNDM0MTMuMC4wLjA.', alt: 'Image 2' },

        // Add more images
      ];

    return (
        <div className="">
            <div className="cardo w-full  h-screen">
            <div className="flex flex-col text-lg md:text-2xl h-screen    m-auto justify-center items-center">
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

            <div id="about" className=" bg-cyan-">
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
            </div>


                <div className="mt-36 mb-2">
                    <ImageGallery images={images} />
                </div>

        </div>
    );
};
 
export default About;