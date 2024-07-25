import { useContext } from "react";
import { AppState } from "./App";

const CarouselHeader = () => {
  const { activeSlide, steps } = useContext(AppState);

  return (
    <div className="p-5">
      <div className="text-xl lg:text-3xl font-bold lg:p-5">
        <span>{steps[activeSlide].id + 1}. </span>
        {steps[activeSlide].title}
      </div>
      <div>
        {steps[activeSlide].description.map((desc, i) => {
          return (
            <p
              className="text-sm lg:text-md lg:px-5 py-1 w-full lg:max-w-[75%]"
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
