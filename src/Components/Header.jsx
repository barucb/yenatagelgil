import { React, useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom"
const Header = () => {
  const pageLinks = [
    { name: "Home", link: "/" },
    { name: "About Us" },
    { name: "Contact Us", },
    { name: "Services", },
    // { name: "Sign Up", link: "/" },
    // { name: "Sign In", link: "/login" },
    // { name: "Add Business", link: "/" },
  ];
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
      <div className="fixed font-playfair  top-0 left-0 z-50 items-center justify-between w-full   text-white bg-black sm:flex h-28 md:flex  ">
        <div className=" py-0 bg-black  md:py-0 md:px-1 ">
          <p className="text-[#FFA500] xl:ml-60 font-playfair  sm:pt-5 pt-12  hover:font-serif text-3xl ml-5 md:text-4xl ">
            <Link to="/" >
              ENAT AGELGIL
            </Link>
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
            {openNavMenu ? <TfiClose className="absolute text-2xl  cursor-pointer right-5 top-12 sm:hidden" /> : <GiHamburgerMenu className="absolute text-3xl cursor-pointer right-5 top-12 lg:hidden" />}
          </button>
          <ul className={`sm:flex sm:items-center xl:mr-48 pt-5 bg-black sm:static     absolute sm:z-auto z-[-1] left-0 w-full  sm:pl-0 pl-9 transition-all duration-200 ease-in ${openNavMenu ? "top-20" : "top-[-300px]"} `}>

            <li className=" md:mx-2 my-5 md:my-5  text-2xl  ">
              <button className="font-semibold pl-8  text-[#FFF5E1]  hover:text-[#FFA500]" >
                Home
              </button>
            </li>
            <li className=" md:mx-2 my-5 md:my-5  text-2xl  ">
              <button className="font-semibold pl-8  text-[#FFF5E1]  hover:text-[#FFA500]" >
                Services
              </button>
            </li>
            <li className=" md:mx-2 my-5 md:my-5  text-2xl  ">
              <button className="font-semibold pl-8  text-[#FFF5E1]  hover:text-[#FFA500]" >
                About Us
              </button>
            </li>
            <li className=" md:mx-2 my-5 md:my-5  text-2xl  ">
              <button className="font-semibold pl-8  text-[#FFF5E1]  hover:text-[#FFA500]" >
                Contact Us
              </button>
            </li>


          </ul>
        </div>
      </div>

    </>
  );
};

export default Header;
