// import Booking from "./utils/booking";
import medicalPlusLogo from "../assets/hero/Group 3.svg";
import menu from "../assets/hero/menu.svg";
import Booking from "./utils/booking";
import message from "../assets/hero/message-circle.svg";

export default function Navbar() {
  return (
    <div className="py-7">
      <div className="flex justify-between px-10">
        <div className="flex">
          <h1 className="title text-blue-600 text-4xl font-sora font-bold">
            Doctor
          </h1>
          <img
            src={medicalPlusLogo}
            alt="medical plus logo image"
            className="w-6 h-6"
          />
        </div>
        <img src={menu} alt="" className="z-50 text-white" />
      </div>
      <div className="links fixed top-0 w-screen  flex flex-col items-center justify-center gap-16 h-screen bg-blue-600 ">
        <ul className="flex flex-col gap-10  font-sora text-base font-normal text-white">
          <li className="">Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
        <Booking image={message} text="Book Now" />
      </div>
    </div>
  );
}
