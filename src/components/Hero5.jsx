import doctor from "../assets/page5/doctor.png";
import Box from "./utils/Box";
import check from "../assets/page5/check-circle.svg";
import plus from "../assets/page5/med.svg";
import clock from "../assets/page5/clock.svg";
export default function Hero5() {
  return (
    <section className="md:py-8 md:px-20 px-10 pb-10 flex flex-col gap-7 md:gap-16 md:my-20">
      <div className="flex justify-center">
        <h1 className="text-title-500 text-xl font-poppin font-semibold flex md:justify-start text-center md:w-72">
          Book an appointement
        </h1>
      </div>
      <div className="flex justify-center">
        <img
          src={doctor}
          alt="doctor with a patient"
          className="md:w-5/6 md:h-6/6 flex justify-center"
        />
      </div>
      <div className="flex flex-col gap-5">
        <p className="flex justify-center font-poppin md:text-5x text-2xl font-bold text-subtitles-950">
          A dedicated doctor with the core mission to help
        </p>
        <p className="flex justify-center text-xl font-light text-paragraphs-500 ">
          orem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
          nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis nunc
          elementum. Tellus quam mauris aenean turpis vulputate sodales nullam
          lobortis. Vulputate tortor tincidun.
        </p>
      </div>
      <div className="flex flex-col gap-5 md:flex-row md:justify-center md:gap-20">
        <Box image={clock} title={"+15 years of experience"} />
        <Box image={check} title={"Urgent 24 hour service"} />
        <div className="w-6/6  flex justify-center">
          <Box image={plus} title={"High quality care"} />
        </div>
      </div>
    </section>
  );
}
