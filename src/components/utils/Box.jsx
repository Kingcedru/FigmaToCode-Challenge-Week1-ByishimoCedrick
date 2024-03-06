export default function Box(prop) {
  return (
    <div className="flex bg-[linear-gradient(145deg,#1678F2_3.73%,#65A8FB_132.69%)] items-center shadow-xl gap-3 rounded-xl py-2 px-4">
      <img src={prop.image} alt="" className="" />
      <h3 className="text-white font-poppin font-semibold  flex text-center">
        {prop.title}
      </h3>
    </div>
  );
}
