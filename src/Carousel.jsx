import { useContext } from "react";
import { AppState } from "./App";
import BackBtn from "./BackBtn";
import NextBtn from "./NextBtn";
const Carousel = () => {
  const { activeSlide } = useContext(AppState);

  return (
    <div className="h-full p-5 flex flex-col container">
      {/* screen */}
      <div className="h-full w-full rounded-md bg-zinc-200"></div>
      {/* controls */}
      <div className="w-full mt-5 flex justify-between">
        {!activeSlide == 0 && <BackBtn />}
        <NextBtn />
      </div>
    </div>
  );
};
export default Carousel;
