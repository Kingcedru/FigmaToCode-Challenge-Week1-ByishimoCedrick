import doctor from "../assets/page2/doctor.png";
import Booking from "./utils/Booking";
import whatsapp from "../assets/hero/whatsapp.png";
export default function Hero2() {
  return (
    <section className="px-10 md:py-4 md:px-7 mt-20">
      <div>
        <img src={doctor} alt="" />
      </div>
      <div className="flex flex-col md:items-start gap-3 md:w-[660px] md:justify-center my-5">
        <h1 className="text-title-500 text-2xl font-poppin font-medium space-x-4 flex justify-start md:justify-start md:w-72">
          About me
        </h1>
        <p className="flex font-poppin md:text-5x text-2xl font-bold text-subtitles-950">
          A dedicated doctor with the core mission to help
        </p>
        <p className="flex font-sora text-base font-normal text-paragraphs-600">
          orem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
          nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis nunc
          elementum. Tellus quam mauris aenean turpis vulputate sodales nullam
          lobortis. Vulputate tortor tincidun.
        </p>
      </div>
      <Booking
        image={whatsapp}
        text="Book an appointment"
        color="bg-[linear-gradient(96deg,#3A8EF6_-10.84%,#6F3AFA_196.74%)] text-white"
      />
    </section>
  );
}
