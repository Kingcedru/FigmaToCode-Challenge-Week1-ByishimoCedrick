export default function Boxes(prop) {
  return (
    <div className="flex bg-blue-600 items-center gap-3 rounded-xl py-2 px-5">
      <img src={prop.image} alt="" className="w-9 h-9" />
      <div className="content flex flex-col gap-1">
        <h3 className="text-white font-poppin">{prop.title}</h3>
        <p className="text-sora font-normal text-white text-xs opacity-[0.8]">
          {prop.paragraph}
        </p>
      </div>
    </div>
  );
}
