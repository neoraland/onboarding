import { useContext } from "react";
import { IoIosClose } from "react-icons/io";
import { AppState } from "./App";
import Carousel from "./Carousel";
import ProgressionBar from "./ProgressionBar";

const MobileCarousel = () => {
  const { steps, activeSlide } = useContext(AppState);

  return (
    <div className="md:hidden h-screen bg-white w-full absolute top-0 left-0 overflow-hidden">
      <div className="w-full flex justify-between p-5">
        <div className="flex justify-between items-center flex-wrap">
          <div className="text-xl md:text-3xl font-bold md:p-5">
            <span>{steps[activeSlide].id + 1}. </span>
            {steps[activeSlide].title}
          </div>
        </div>

        <button className="ml-auto w-[30px] h-[30px] rounded-full bg-zinc-500 text-xl text-white grid place-items-center">
          <IoIosClose />
        </button>
      </div>
      <div className="h-full w-full flex flex-col">
        <Carousel className="flex-grow" />
        <ProgressionBar className="flex-none" />
      </div>
    </div>
  );
};

export default MobileCarousel;
