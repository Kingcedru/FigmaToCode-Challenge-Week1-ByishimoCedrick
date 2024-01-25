export default function Booking(prop) {
  return (
    <button className="book flex py-4 px-7 gap-2 items-center justify-start h-10 font-sora bg-[linear-gradient(96deg,#3A8EF6_-10.84%,#6F3AFA_196.74%)] text-white rounded-full text-base font-semibold">
      <img src={prop.image} alt="message logo" className="" />
      {prop.text}
    </button>
  );
}
