export default function Booking(prop) {
  return (
    <button
      className={`book flex py-3 px-4  gap-2 md:items-center shadow-lg justify-start h-10 font-sora ${prop.color}  rounded-full text-base font-semibold`}>
      <img src={prop.image} alt="message logo" className="" />
      {prop.text}
    </button>
  );
}
