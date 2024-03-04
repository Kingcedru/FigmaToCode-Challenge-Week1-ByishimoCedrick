import medicine from "../assets/page3/med.png";
import whatsapp from "../assets/page2/whatsapp.png";
import Booking from "./utils/Booking";

export default function Hero3() {
  return (
    <section className="md:py-4 mt-20 px-10 md:px-7 bg-background-lightBlue">
      <div>
        <img src={medicine} alt="medicine image" />
      </div>
      <div className="flex flex-col md:items-start gap-3 md:w-[660px] md:justify-center my-5">
        <h1 className="text-title-500 text-2xl font-poppin font-medium space-x-4 flex justify-start md:justify-start md:w-72">
          services
        </h1>
        <p className="flex font-poppin md:text-5x text-2xl font-bold text-subtitles-950">
          Experienced in multiple medical practices
        </p>
        <p className="flex font-sora text-base font-normal text-paragraphs-600">
          orem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
          nibh cursus at sed sagittis amet, sed.
        </p>
      </div>
      <div className="flex justify-center">
        <Booking
          image={whatsapp}
          text="Book an appointment"
          color="bg-[linear-gradient(96deg,#3A8EF6_-10.84%,#6F3AFA_196.74%)] text-white"
        />
      </div>
    </section>
  );
}
