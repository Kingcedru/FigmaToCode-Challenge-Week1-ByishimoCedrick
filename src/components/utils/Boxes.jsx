export default function Boxes(prop) {
  return (
    <div className="flex bg-[linear-gradient(145deg,#1678F2_3.73%,#65A8FB_132.69%)] items-center gap-3 rounded-xl py-2 px-4">
      <img src={prop.image} alt="" className="" />
      <div className="content flex flex-col gap-1 justify-center items-start w-44">
        <h3 className="text-white font-poppin font-semibold  flex text-center">{prop.title}</h3>
        <p className="text-sora font-normal text-white text-xs opacity-80 w-44">
          {prop.paragraph}
        </p>
      </div>
    </div>
  );
}
