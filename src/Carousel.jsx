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
      } md:h-full flex flex-col container overflow-hidden`}
    >
      {/* screen */}
      <div className="h-full w-full rounded-md bg-zinc-200 flex flex-col overflow-hidden">
        {!mobileCarousel ? (
          <div className="w-full flex justify-between items-center">
            <div className="w-1/2 h-[540px] mb-auto p-5">
              <ViewPlayer />
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center gap-3 mb-auto mt-12 text-center">
              <h2 className="text-2xl font-bold">Lorem ipsum dolor sit!</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                voluptas.
              </p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        ) : (
          <ViewPlayer />
        )}
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
