import doctor from "../assets/page7/doctor.png";
import youtube from "../assets/page7/youtube.svg";
import facebook from "../assets/page7/facebook.svg";
import whatsapp from "../assets/page7/whatsapp.svg";

export default function Hero7() {
  return (
    <div className="grid gap-5 text-white bg-[linear-gradient(145deg,#1678F2_3.73%,#65A8FB_132.69%)] px-10 md:px-7 py-6">
      <div className="grid gap-2">
        <img src={doctor} alt="" />
        <p className="font-sora font-extralight">
          8 W. South St.Buford, GA 30518 5Briarwood LaneVienna, VA 22180 RER
        </p>
        <div className="flex gap-5">
          <img src={youtube} alt="" />
          <img src={facebook} alt="" />
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="grid gap-3">
        <h1 className="font-sora text-2xl font-semibold">Book Now</h1>
        <span className="font-sora font-extralight">Appointment</span>
      </div>
      <div className="grid gap-1">
        <h1 className="font-sora text-2xl font-semibold mb-4">Contact</h1>
        <p className="font-sora font-extralight">+1 123456789</p>
        <p className="font-sora font-extralight">remmcal@gmail.com</p>
        <p className="font-sora font-extralight">Phone: +1 12345678</p>
      </div>
      <div className="grid gap-1">
        <h1 className="font-sora text-2xl font-semibold mb-4">Company Info</h1>
        <p className="font-sora font-extralight">About</p>
        <p className="font-sora font-extralight">Services</p>
        <p className="font-sora font-extralight">Blog</p>
      </div>
      <div className="bg-white py-[1px] my-5"></div>
      <div className="text-center">© Doctor all rights 2024 - Designed by Cedrick Byishimo</div>
    </div>
  );
}
