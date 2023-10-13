import img1 from "../Images/agelgil1.png";
import img1blured from "../Images/agelgilblured.png";

import img2 from "../Images/yefsk.png";
import img2blured from "../Images/yefskblured.png";
import img3 from "../Images/2.png";
import img3blured from "../Images/2blured.png";
import img4 from "../Images/arusto.jpg"
import img4blured from "../Images/arustoblured.png"
import img5 from "../Images/dabo.jpg"
import img5blured from "../Images/daboblured.png"
import img6 from "../Images/kitfo.png"
import img6blured from "../Images/kitfoblured.png"

import { FaEnvelope, FaPhone, FaMapMarker, FaMotorcycle, FaUtensils, FaClipboardList, FaHeart, FaFlag, FaCheck, FaLightbulb, FaTelegram } from "react-icons/fa"
import Footer from "../Components/Footer";
import { React, useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";



const HomePage = () => {




    const ServiceCard = (props) => {
        return (

            <div className=" shadow-lg shadow-black rounded-2xl bg-[#FFA500] flex flex-col items-center  m-5 w-fit p-4">
                <div className="w-60 h-60" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${props.bluredimg})` }}>

                    <img src={props.img} loading="lazy" className="w-60 h-60" />
                </div>
                <h1 className="text-2xl md:text-3xl py-3 xl:text-4xl text-center font-semibold">{props.title}</h1>
                <h1 className="md:text-3xl text-xl text-center "> {props.description}</h1>
                <div className="flex justify-center">

                    <a href="https://t.me/agelgelfoods" className="p-3 my-5  rounded-3xl text-white  text-2xl  font-semibold  bg-red-600  ">Order Now</a>
                </div>
            </div>

        )
    }

    const Features = (props) => {
        return (
            <div className="flex my-3">
                <div className="flex-shrink-0">
                    <div className="flex items-center justify-center p-1  bg-[#FFA500] rounded-md">
                        {props.icon}
                    </div>
                </div>
                <div className="ml-4">
                    <h5 className="text-3xl text-[#00A65E] font-bold ">
                        {props.title}
                    </h5>
                    <p className=" text-xl md:text-2xl pt-2 font-semibold ">
                        {props.description}
                    </p>
                </div>
            </div>
        )
    }

    const Header = () => {

        const [openNavMenu, setOpenNavMenu] = useState(false);

        const menuClick = useRef();

        const screenClick = (event) => {
            if (menuClick.current && !menuClick.current.contains(event.target)) {
                setOpenNavMenu(false);
            }
        };

        useEffect(() => {
            document.addEventListener("click", screenClick);

            return () => {
                document.removeEventListener("click", screenClick);
            };
        }, []);

        return (
            <>
                <div className="fixed font-playfair  pb-5  top-0 left-0 z-50 items-center justify-between w-full   text-white bg-black sm:flex h-16 md:h-28 md:flex  ">
                    <div className=" pt-3 md:pt-5 sm:pt-7 bg-black   md:py-0 md:px-1 ">
                        <p className="text-[#FFA500] xl:ml-60 font-playfair   mb-5   hover:font-serif text-2xl ml-5  ">
                            <a href="/" >
                                ENAT AGELGIL
                            </a>
                        </p>
                    </div>


                    <div className="">
                        <button
                            ref={menuClick}
                            onClick={(event) => {
                                event.stopPropagation();
                                setOpenNavMenu(!openNavMenu);
                            }}
                            className="sm:hidden"
                        >
                            {openNavMenu ? <TfiClose className="absolute text-2xl  cursor-pointer right-5 top-3 sm:hidden" /> : <GiHamburgerMenu className="absolute text-3xl cursor-pointer right-5 top-3 lg:hidden" />}
                        </button>
                        <ul className={`sm:flex text-2xl sm:text-xl md:text-2xl sm:items-center xl:mr-48  bg-black sm:static     absolute sm:z-auto z-[-1] left-0 w-full  sm:pl-0 pl-7 transition-all duration-200 ease-in ${openNavMenu ? "top-16" : "top-[-300px]"} `}>

                            <li className=" md:mx-2     ">
                                <a href="/" className="font-semibold pl-8  text-[#FFF5E1]  hover:text-[#FFA500]" >
                                    Home
                                </a>
                            </li>
                            <li className=" md:mx-2     ">
                                <a href="#services" className="font-semibold pl-8  text-[#FFF5E1]  hover:text-[#FFA500]" >
                                    Services
                                </a>
                            </li>
                            <li className=" md:mx-2    ">
                                <a href="#aboutus" className="font-semibold pl-8  text-[#FFF5E1]  hover:text-[#FFA500]" >
                                    About Us
                                </a>
                            </li>
                            <li className=" md:mx-2    ">
                                <a href="#contactus" className="font-semibold pl-8  text-[#FFF5E1]  hover:text-[#FFA500]" >
                                    Contact Us
                                </a>
                            </li>


                        </ul>
                    </div>
                </div>

            </>
        );
    };


    const ContactUs = () => {
        return (
            <div id="contactus" className="bg-[#FFA500] font-playfair font-semibold pt-28 pb-28 md:mt-56 py-10">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-5xl font-semibold text-center mb-5">Get in Touch</h2>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                        <div className="w-full  flex justify-center md:mt-6 ">
                            <div className="bg-[#FFA500] px-2 py-12  text-2xl sm:px-8 sm:text-3xl rounded-lg shadow-xl">
                                <div className="flex mb-4 items-center">
                                    <FaEnvelope className="text-2xl text-gray-600" />
                                    <a href="mailto:yenatagelgil@gmail.com" className="ml-2">yenatagelgil@gmail.com</a>
                                </div>
                                <div className="mb-4 flex items-center">
                                    <div>
                                        <FaPhone className="text-2xl rotate-90  text-gray-600" />
                                    </div>
                                    <div>

                                        <a href="tel:+251986760961" className="ml-2">+251986760961</a><br />
                                        <a href="tel:+251713667075" className="ml-2">+251713667075</a>
                                    </div>
                                </div>
                                <div className="flex mb-4 items-center">
                                    <FaMapMarker className="text-2xl text-gray-600" />
                                    <span className="ml-2">Mekanisa, Addis Ababa</span>
                                </div>
                                <div className="mt-4">
                                    <a href="https://t.me/agelgelfoods" className=" flex gap-2 hover:text-blue-700 mr-3">
                                        <FaTelegram size={30} className="bg-white rounded-full text-blue-600" /> t.me/agelgelfoods
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };




    return (


        <>
            <Header />
            <div id="main" className="relative font-playfair mt-36  ">
                {/*hero section */}      <div className='lg:flex'>

                    <div className="md:mx-20 mx-2   md:pt-12 lg:ml-28 ">

                        <p className="font-bold font-playfair   ml-10 md:text-6xl text-4xl text-[#FFA500] pt-10 lg:my-6">
                            <h2>
                                Yenat Agelgil <br />
                            </h2>
                            <h2 className="mt-2 md:mt-5">

                                We Deliver the Food We Crave to Eat!!!
                            </h2>
                        </p>

                        <p className=" text-center  md:text-3xl text-[#00A65E] text-2xl pt-20">
                            Savor Irresistible Flavors, Delivered to Your Doorstep, with a Commitment to Quality and Cleanliness

                        </p>
                        <div className="align-center justify-center flex mt-5">

                            <a href="https://t.me/agelgelfoods" className="p-5 mb-8  duration-500 ease-in-out  rounded-3xl text-white  text-3xl  font-semibold  bg-red-600  ">
                                Order Now
                            </a>
                        </div>
                    </div>

                    <div className=" h-[400px] lg:h-[700px]" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${img1blured})` }}>
                        <img src={img1} className="xl:pr-10  w-screen h-full lg:mt-0" alt="yinebeb character" />

                    </div>

                </div>

                <div className="bg-gray-200 mt-16 md:mt-72">




                    <div id="services" className="pt-10 md:pt-16 ">

                        <p className="text-center mt-16 py-10  text-4xl md:text-6xl font-semibold sm:text-4xl xl:pt-16">Discover Our Services</p>
                        <div className="flex justify-center ">

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-10 xl:gap-2 xl:mt-5 xl:grid-cols-4   ">

                                <ServiceCard bluredimg={img1blured} title="YETSOM & YEFESEK AGELGIL " description="A delightful selection of Yetsom and Yefesek Agelgil, flavors that nourish both your body and soul." img={img1} />
                                <ServiceCard bluredimg={img4blured} title=" DORO PACKAGE " description="Experience a full Doro Package that takes you on a flavorful journey through tradition and taste." img={img4} />
                                <ServiceCard bluredimg={img5blured} title="Difo Dabo " description="Each bite of our freshly baked bread brings a symphony of flavors and textures to your palate." img={img5} />
                                <ServiceCard bluredimg={img6blured} title=" Kitfo Keneteketayochu " description="A complete Kitfo package that's designed to delight your senses." img={img6} />



                            </div>

                        </div>
                    </div>

                    <div className=" md:mt-72  md:pt-48  px-3 lg:grid lg:grid-flow-row-dense    lg:grid-cols-2 lg:gap-12 lg:items-center">


                        <div className="lg:col-start-2 pt-72 md:pl-20">
                            <h4 className="text-4xl font-extrabold ">
                                Why Yenat Agelgil Stands Out
                            </h4>
                            <ul className="mt-10">
                                <li>
                                    <Features title="Fast and Free Delivery" description="Enjoy the convenience of swift and complimentary delivery, not just in Addis Ababa but also in Debrezeyt." icon={<FaMotorcycle size={60} />} />
                                    <Features title="Quality and Cleanliness" description=" Our commitment to cleanliness guarantees you savor only the freshest and most hygienic meals." icon={<FaUtensils size={60} />} />
                                    <Features title="Customizable Orders" description="Tailor your orders to your preferences. We offer customization options to make your dining experience truly yours." icon={<FaClipboardList size={60} />} />
                                    <Features title="Homemade with Love" description="Our dishes are prepared with care and passion, just like they would be in your home kitchen. You'll taste the love in every bite." icon={<FaHeart size={60} />} />
                                </li>


                            </ul>
                        </div>
                        <div className=" object-cover h-52 mb-5 lg:h-60 sm:h-96 " style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url(${img2blured})` }}>

                            <img src={img2} alt="Yefesek Agelgil" loading="lazy" className=" mt-16 lg:mt-0   rounded shadow-lg" />
                        </div>
                    </div>


                    <div id="aboutus" className=" pt-40 md:pt-72 lg:pt-96 lg:pb-96  px-3 lg:grid lg:grid-flow-row-dense    lg:grid-cols-2 lg:gap-12 lg:items-center">






                        <div className="lg:col-start-1 md:pl-20">
                            <h4 className="text-4xl font-extrabold ">
                                Who We Are?
                            </h4>
                            <p className="text-xl sm:text-2xl font-semibold pt-5">

                                Enat Agelgil is more than just a food delivery service. Our story began with a passion for sharing the flavors and traditions of Ethiopian food.
                            </p>
                            <ul className="mt-10">
                                <li>
                                    <Features title="Our Mission" description="Our mission is to bring the rich, diverse tastes of Ethiopian cuisine to your doorstep, ensuring every bite celebrates culture and authenticity. " icon={<FaFlag size={60} />} />
                                    <Features title="Our Values" description="We value authenticity, quality, and the joy of a delicious meal. We're committed to using the finest ingredients and maintaining cleanliness " icon={<FaCheck size={60} />} />
                                    <Features title="Our Experience" description="With years of experience, our dish tells a story. We celebrate diversity through food, ensuring every meal is a memorable experience." icon={<FaLightbulb size={60} />} />
                                </li>


                            </ul>
                        </div>
                        <div className=" lg:-mt-72 object-cover h-52 mb-5   " style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url(${img3blured})` }}>

                            <img src={img3} alt="Yefesek Agelgil" loading="lazy" className=" mt-16 lg:mt-0   rounded shadow-lg" />
                        </div>
                    </div>






                    <div className="pt-40">

                        <ContactUs />
                    </div>

                </div>
            </div>
            <Footer />
        </>

    )
}

export default HomePage