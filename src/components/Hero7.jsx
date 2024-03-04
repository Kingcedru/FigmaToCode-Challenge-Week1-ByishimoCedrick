import doctor from "../assets/page7/doctor.png";
import youtube from "../assets/page7/youtube.svg";
import facebook from "../assets/page7/facebook.svg";
import whatsapp from "../assets/page7/whatsapp.svg";

export default function Hero7() {
  return (
    <div className="bg-[linear-gradient(145deg,#1678F2_3.73%,#65A8FB_132.69%)] px-10 md:px-7 py-6">
      <div className="grid gap-2">
        <img src={doctor} alt="" />
        <p className="text-white font-sora font-extralight">
          8 W. South St.Buford, GA 30518 5Briarwood LaneVienna, VA 22180 RER
        </p>
        <div className="flex gap-5">
          <img src={youtube} alt="" />
          <img src={facebook} alt="" />
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <div>
        <h1>Book Now</h1>
        <span>Appointment</span>
      </div>
      <div>
        <h1>Contact</h1>
        <span>+1 123456789</span>
        <span>remmcal@gmail.com</span>
        <span>Phone: +1 12345678</span>
      </div>
      <div>
        <h1>Company info</h1>
        <span>About</span>
        <span>Services</span>
        <span>Blog</span>
      </div>
    </div>
  );
}
