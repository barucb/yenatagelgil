import { Link } from "react-router-dom";
import { RiFacebookCircleFill, RiGoogleFill, RiInstagramLine, RiLinkedinBoxFill, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri"

const Footer = () => {
    return (
        <div className="text-[#FFA500] justify-center bg-black flex text-center  flex-col w-full">
            <p className="font-semibold py-4 text-2xl md:text-3xl">Yenat Agelgil</p>
            < div className="w-full pb-5 text-xl text-center ">
                © 2023 Copyright: Yenat Agelgil

            </div >
        </div>
    )
}

export default Footer;
