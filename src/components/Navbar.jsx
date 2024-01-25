// import Booking from "./utils/booking";
import medicalPlusLogo from "../assets/hero/Group 3.svg";
import menu from "../assets/hero/menu.svg";
import Booking from "./utils/Booking";
import whatsapp from "../assets/hero/whatsapp.png";
import close from "../assets/hero/close.svg";
import { useState } from "react";

export default function Navbar() {
  const [isMobile, setMobile] = useState(false);
  const toogleMenu = () => {
    setMobile(!isMobile);
  };
  return (
    <div className="md:hidden py-7">
      <div className="flex justify-between px-10">
        <div className="flex">
          <h1 className="title text-blue-600 text-2xl font-sora font-bold">
            Doctor
          </h1>
          <img
            src={medicalPlusLogo}
            alt="medical plus logo image"
            className="w-6 h-6"
          />
        </div>
        <img
          src={!isMobile ? menu : close}
          alt=""
          className="z-50 text-white"
          onClick={toogleMenu}
        />
      </div>
      {isMobile && (
        <div className="links fixed top-0 w-screen  flex flex-col z-40 items-center justify-center gap-16 h-screen bg-blue-600 ">
          <ul className="flex flex-col gap-10  font-poppin text-3xl font-medium text-white text-center">
            <li className="">Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
          <Booking
            image={whatsapp}
            text="Book Now"
            color="bg-white text-blue-500"
          />
        </div>
      )}
    </div>
  );
}
