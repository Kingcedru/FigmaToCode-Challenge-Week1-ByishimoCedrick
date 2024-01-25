import medicalPlusLogo from "../assets/hero/Group 3.svg";
import doctors from "../assets/hero/Object.png";
import message from "../assets/hero/message-circle.svg";
import clock from "../assets/hero/clock.svg";
import Booking from "./utils/booking";
import check from "../assets/hero/check-circle.svg";
import plus from "../assets/hero/med.svg";
import Boxes from "./utils/Boxes";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="">
      <div className="bg-background-lightBlue w-screen md:px-16 pb-36">
        <section className="nav hidden lg:flex gap-40  lg:items-center lg:py-8">
          <div className="links lg:flex items-center gap-36 px-10">
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
            <ul className="lg:flex  lg:gap-6 lg:items-center font-sora text-base font-normal text-paragraphs-600">
              <li className="text-blue-600">Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Contact</li>
            </ul>
          </div>
          <Booking image={message} text="Book Now"/>
        </section>
        <Navbar/>
        <section className="hero md:flex md:flex-row flex flex-col-reverse md:items-center gap-6 mt-8 z-0">
          <div className="information flex flex-col px-10  md:py-4 md:px-7 md:items-start gap-6 md:w-[660px] md:justify-center">
            <h1 className="text-title-500 text-xl font-poppin font-medium space-x-4 md:w-72">
              Dr. Matthew Anderson
            </h1>
            <p className="font-poppin text-5xl font-bold text-subtitles-950">
              A dedicated doctor you can trust
            </p>
            <p className="font-sora text-base font-normal text-paragraphs-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              eget vel, nunc nulla feugiat. Metus ut.
            </p>
            <Booking image={message} text="Book an appointment" />
          </div>
          <div>
            <div className="flex items-center">
              <img src={doctors} alt="" className="" />
            </div>
          </div>
        </section>
      </div>
      <section className="boxes flex flex-col md:flex md:justify-center my-16 gap-7 px-10  md:px-36 md:absolute md:top-[610px] md:w-full">
        <Boxes
          image={clock}
          title="24 hour service"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing el"
        />
        <Boxes
          image={check}
          title="8 years of experience"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing el"
        />
        <Boxes
          image={plus}
          title="High quality care"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing el"
        />
      </section>
    </div>
  );
}
