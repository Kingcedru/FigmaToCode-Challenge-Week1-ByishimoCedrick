import medicalPlusLogo from "../assets/hero/Group 3.svg";
import doctors from "../assets/hero/Object.png";
import message from "../assets/hero/message-circle.svg";
import clock from "../assets/hero/clock.svg";

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
        <div className="flex py-4 px-7 items-start gap-2">
          <button className="book flex gap-1 bg-blue-600 text-white rounded-full text-xl font-semibold w-24 h-6">
            <img src={message} alt="message logo" className="w-6 h-6" />
            Book Now
          </button>
        </div>
      </section>
      <section className="hero flex items-center">
        <div className="information">
          <h1>Dr. Matthew Anderson</h1>
          <p>A dedicated doctor you can trust</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            eget vel, nunc nulla feugiat. Metus ut.
          </p>
          <button className="book flex bg-blue-600 text-white rounded-full text-xl font-semibold">
            <img src={message} alt="message logo" className="w-6 h-6" />
            Book an appointment
          </button>
        </div>
        <div>
          <div className="">
            <img src={doctors} alt="" className="" />
          </div>
        </div>
      </section>
      <section className="boxes">
        <div className="box1 flex bg-blue-600 w-64 h-20 rounded-xl py-2 px-5">
          <img src={clock} alt="" className="w-9 h-9" />
          <div className="content ">
            <h3 className="w-36 h-7 font-semibold text-lg">Expertise in your field of medicine</h3>
            <p className="text-lg font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing el</p>
          </div>
        </div>
      </section>
    </div>
  );
}
