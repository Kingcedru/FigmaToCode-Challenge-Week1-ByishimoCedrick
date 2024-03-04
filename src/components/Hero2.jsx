import doctor from "../assets/page2/doc.png";
import Booking from "./utils/Booking";
import whatsapp from "../assets/page2/whatsapp.png";
export default function Hero2() {
  return (
    <section className="">
      <div>
        <img src={doctor} alt="docter image" />
      </div>
      <div className="flex px-10  md:px-7 flex-col md:items-start gap-3 md:w-[660px] md:justify-center my-5">
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
      <div className="px-10 md:px-7 flex justify-center">
        <Booking
          image={whatsapp}
          text="Book an appointment"
          color="bg-[linear-gradient(96deg,#3A8EF6_-10.84%,#6F3AFA_196.74%)] text-white"
        />
      </div>
    </section>
  );
}
