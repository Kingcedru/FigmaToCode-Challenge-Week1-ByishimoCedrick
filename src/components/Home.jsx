import medicalPlusLogo from "../assets/hero/Group 3.svg";
import doctors from "../assets/hero/Object.png";
import message from "../assets/hero/message-circle.svg";
import clock from "../assets/hero/clock.svg";
import Booking from "./utils/booking";
import check from "../assets/hero/check-circle.svg";
import plus from "../assets/hero/med.svg";
import Boxes from "./utils/Boxes";

export default function Home() {
  return (
    <div className="bg-background-lightBlue px-20">
      <section className="nav flex gap-36  items-center py-8">
        <div className="links flex items-center gap-32 px-10">
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
          <ul className="flex gap-6 items-center font-sora text-base font-normal text-paragraphs-600">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
        </div>
        <Booking image={message} text="Book Now" />
      </section>
      <section className="hero flex  items-center gap-6 mt-8">
        <div className="information flex flex-col  py-4 px-7 items-start gap-6 w-[660px] justify-center">
          <h1 className="text-title-500 text-xl font-poppin font-medium space-x-4 w-72">
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
      <section className="boxes flex justify-start my-16 gap-7 px-36">
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
