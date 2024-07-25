import { useContext } from "react";
import { AppState } from "./App";
import BackBtn from "./BackBtn";
import NextBtn from "./NextBtn";
import ViewPlayer from "./ViewPlayer";
const Carousel = () => {
  const { activeSlide, mobileCarousel } = useContext(AppState);

  return (
    <div
      className={`${
        !mobileCarousel && "p-5"
      } md:h-full flex flex-col container`}
    >
      {/* screen */}
      <div className="h-full w-full rounded-md bg-zinc-200 flex flex-col">
        <ViewPlayer />
      </div>
      {/* controls */}
      <div
        className={`${
          mobileCarousel && "px-5"
        } w-full mt-5 flex justify-between mb-5 md:mb-0`}
      >
        {!activeSlide == 0 && <BackBtn />}
        <NextBtn />
      </div>
    </div>
  );
};
export default Carousel;
