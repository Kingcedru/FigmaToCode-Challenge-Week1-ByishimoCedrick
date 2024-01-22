import medicalPlusLogo from "../assets/hero/Group 3.svg";
import doctors from "../assets/hero/icon2.svg";

export default function Home() {
  return (
    <div>
      <section className="nav flex w-full gap-52 justify-around items-center">
        <div className="logo flex">
          <h1 className="title text-blue-600 text-2xl font-bold">Doctor</h1>
          <img
            src={medicalPlusLogo}
            alt="medical plus logo image"
            className="w-6 h-6"
          />
        </div>
        <div className="links">
          <ul className="flex gap-6 items-center">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex py-4 px-7 items-start gap-2">
          <button className="book flex bg-blue-600 text-white rounded-full text-xl font-semibold">
            Book Now
          </button>
        </div>
      </section>
      <section className="hero">
        <div>
          <div className="image">
            <img src={doctors} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
