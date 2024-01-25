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
      <div className="md:bg-background-lightBlue bg-[#FFF;] md:px-5 lg:px-16 md:pb-36 mb-10">
        <section className="nav hidden md:flex md:40 lg:gap-40  md:items-center md:py-8">
          <div className="links md:flex items-center md:gap-20 lg:gap-36 md:px-16">
            <div className="flex">
              <h1 className="title text-blue-600 md:text-2xl lg:text-4xl font-sora font-bold">
                Doctor
              </h1>
              <img
                src={medicalPlusLogo}
                alt="medical plus logo image"
                className="lgw-6 h-6"
              />
            </div>
            <ul className="md:flex md:gap-3  lg:gap-6 md:items-center font-sora text-base font-normal text-paragraphs-600">
              <li className="text-blue-600">Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Contact</li>
            </ul>
          </div>
          <Booking
            image={message}
            text="Book Now"
            color="bg-[linear-gradient(96deg,#3A8EF6_-10.84%,#6F3AFA_196.74%)] text-white"
          />
        </section>
        <Navbar />
        <section className="hero md:flex md:flex-row flex flex-col-reverse items-center justify-center md:items-center gap-6 mt-8 z-0">
          <div className="information flex flex-col px-10  md:py-4 md:px-7 md:items-start gap-6 md:w-[660px] md:justify-center">
            <h1 className="text-title-500 text-xl font-poppin font-medium space-x-4 flex justify-center md:justify-start md:w-72">
              Dr. Matthew Anderson
            </h1>
            <p className="flex text-center font-poppin md:text-5x text-3xl font-bold text-subtitles-950">
              A dedicated doctor you can trust
            </p>
            <p className="flex md:justify-center justify-end md:text-start text-center font-sora text-base font-normal text-paragraphs-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              eget vel, nunc nulla feugiat. Metus ut.
            </p>
            <div className="flex justify-center ">
              <Booking
                image={message}
                text="Book an appointment"
                color="bg-[linear-gradient(96deg,#3A8EF6_-10.84%,#6F3AFA_196.74%)] text-white"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <img src={doctors} alt="" className="" />
            </div>
          </div>
        </section>
      </div>
      <section className="boxes flex flex-col md:flex-row md:flex md:justify-center md:my-8 gap-7 px-10  md:px-36 md:absolute md:top-[530px] lg:top-[610px] md:w-full mb-10">
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
