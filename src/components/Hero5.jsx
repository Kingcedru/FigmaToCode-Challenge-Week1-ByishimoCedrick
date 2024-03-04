import doctor from "../assets/page5/doctor.png";
import Box from "./utils/Box";
import check from "../assets/page5/check-circle.svg";
import plus from "../assets/page5/med.svg";
import clock from "../assets/page5/clock.svg";
export default function Hero5() {
  return (
    <section className="px-10 md:px-7 pb-10 flex flex-col gap-5">
      <div className="flex justify-center">
        <h1 className="text-title-500 text-xl font-poppin font-semibold flex md:justify-start text-center md:w-72">
          Book an appointement
        </h1>
      </div>
      <img src={doctor} alt="doctor with a patient" />
      <p className="flex text-center font-poppin md:text-5x text-2xl font-bold text-subtitles-950">
        A dedicated doctor with the core mission to help
      </p>
      <p className="flex font-poppin md:text-5x text-xl font-normal text-subtitles-950 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas egestas
        viverra.
      </p>
      <div className="flex flex-col gap-5">
        <Box image={clock} title={"+15 years of experience"} />
        <Box image={check} title={"Urgent 24 hour service"} />
        <div className="w-6/6 flex justify-center">
          <Box image={plus} title={"High quality care"} />
        </div>
      </div>
    </section>
  );
}
