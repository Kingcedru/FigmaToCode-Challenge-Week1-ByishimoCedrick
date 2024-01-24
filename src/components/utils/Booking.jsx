export default function Booking(prop) {
  return (
    <button className="book flex py-4 px-7 gap-1 bg-blue-600 text-white rounded-full text-xl font-semibold">
      <img src={prop.image} alt="message logo" className="" />
      {prop.text}
    </button>
  );
}
