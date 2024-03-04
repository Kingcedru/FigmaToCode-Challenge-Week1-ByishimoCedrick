import back from "../assets/page6/back.svg";
import next from "../assets/page6/next.svg";
import person from "../assets/page6/person.svg";

export default function Hero6() {
  return (
    <div className="bg-background-lightBlue px-3  flex flex-col gap-5 py-16">
      <div className="px-7 md:px-7 pb-10">
        <div className="flex flex-col gap-5">
          <p className="flex text-center font-poppin md:text-5x text-2xl font-bold text-subtitles-950">
            What our great customers say about Dr. Matthew Anderson
          </p>
          <p className="flex font-poppin md:text-5x text-xl font-normal text-subtitles-950 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            egestas viverra.
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <img src={back} alt="" />
        <div className="bg-white rounded-2xl py-2">
          <div className="flex flex-col md:items-start gap-3 md:w-[660px] md:justify-center my-3 px-4">
            <p className="flex text-start font-sora text-base font-normal text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              egestas viverra. iTristiqu
            </p>
            <div className="flex gap-4">
              <img src={person} alt="" />
              <div className="flex flex-col justify-center">
                <span className="text-title-500 text-lg font-sora font-semibold">
                  Samy White
                </span>
                <span className="font-sora text-base font-normal text-paragraphs-600">Cardiology Patient</span>
              </div>
            </div>
          </div>
        </div>
        <img src={next} alt="" />
      </div>
    </div>
  );
}
