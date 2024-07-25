import { useContext } from "react";
import { AppState } from "./App";

const CarouselHeader = () => {
  const { activeSlide, steps } = useContext(AppState);

  return (
    <div className="p-5">
      <div className="flex justify-between items-center flex-wrap">
        <div className="text-xl md:text-3xl font-bold md:p-5">
          <span>{steps[activeSlide].id + 1}. </span>
          {steps[activeSlide].title}
        </div>
      </div>
      <div>
        {steps[activeSlide].description.map((desc, i) => {
          return (
            <p
              className="text-sm md:text-md md:px-5 py-1 w-full md:max-w-[75%]"
              key={i}
            >
              {desc}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default CarouselHeader;
