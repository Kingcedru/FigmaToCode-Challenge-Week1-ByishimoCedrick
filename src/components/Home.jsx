import medicalPlusLogo from "../assets/hero/Group 3.svg";
import doctors from "../assets/hero/Object.png";
import message from "../assets/hero/message-circle.svg";
import clock from "../assets/hero/clock.svg";
import Booking from "./utils/booking";
import Boxes from "./utils/Boxes";

export default function Home() {
  return (
    <div>
      <section className="nav flex w-full gap-52 justify-around items-center">
        <div className="logo flex">
          <h1 className="title text-blue-600 text-2xl font-bold">Doctor</h1>
          <img
            src={medicalPlusLogo}
            alt="medical plus logo image"
            className="w-6 h-6"
          />
        </div>
        <div className="links">
          <ul className="flex gap-6 items-center">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
        </div>
        <Booking image={message} text="Book Now" />
      </section>
      <section className="hero flex items-center">
        <div className="information">
          <h1 className="text-title-500">Dr. Matthew Anderson</h1>
          <p>A dedicated doctor you can trust</p>
          <p className="font-sora">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            eget vel, nunc nulla feugiat. Metus ut.
          </p>
          <Booking image={message} text="Book an appointment" />.
        </div>
        <div>
          <div className="">
            <img src={doctors} alt="" className="" />
          </div>
        </div>
      </section>
      <section className="boxes">
        <Boxes
          image={clock}
          title="Expertise in your field of medicine"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing el"
        />
      </section>
    </div>
  );
}
