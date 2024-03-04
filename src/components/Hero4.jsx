import Booking from "./utils/Booking";
import whatsapp from "../assets/page4/whatsapp.png";

export default function Hero4() {
  return (
    <div className="px-10 md:px-7 pb-10 flex flex-col gap-10">
      <div className="flex justify-center">
        <h1 className="text-title-500 text-xl font-poppin font-semibold flex md:justify-start text-center md:w-72">
          Book an appointement
        </h1>
      </div>
      <div className="rounded-2xl flex flex-col gap-5 p-5 bg-[linear-gradient(145deg,#1678F2_3.73%,#65A8FB_132.69%)] text-white">
        <p className="flex text-center font-poppin md:text-5x text-2xl font-bold">
          Schedule a virtual or presential appointment today
        </p>
        <p className="flex font-sora md:text-5x text-xl font-light text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          egestas viverra fermentum felis.
        </p>
        <Booking
          color={"bg-white text-blue-500"}
          image={whatsapp}
          text={"Book an appointment"}
        />
      </div>
    </div>
  );
}
