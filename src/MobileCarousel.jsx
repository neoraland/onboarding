import { useContext, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { AppState } from "./App";
import Carousel from "./Carousel";
import ProgressionBar from "./ProgressionBar";

const MobileCarousel = () => {
  const { steps, activeSlide, setMobileCarousel } = useContext(AppState);
  return (
    <div className="md:hidden h-screen bg-white w-full absolute top-0 left-0">
      <div className=" w-full flex justify-between p-5">
        <div className="flex justify-between items-center flex-wrap">
          <div className="text-xl md:text-3xl font-bold md:p-5">
            <span>{steps[activeSlide].id + 1}. </span>
            {steps[activeSlide].title}
          </div>
          <div className="mt-3 text-sm">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              numquam?
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setMobileCarousel(false);
          }}
          className="ml-auto min-w-[30px] w-[30px] h-[30px] rounded-full bg-zinc-500 text-xl text-white grid place-items-center"
        >
          <IoIosClose />
        </button>
      </div>
      <div>
        <div className="mb-5">
          <ProgressionBar />
        </div>
        <div className="h-full">
          <Carousel />
        </div>
      </div>
    </div>
  );
};
export default MobileCarousel;
