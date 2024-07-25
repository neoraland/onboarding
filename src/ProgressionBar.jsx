import { useContext } from "react";
import { AppState } from "./App";

const ProgressionBar = () => {
  const { steps, setSteps, setActiveSlide } = useContext(AppState);

  const handleChangeActiveSlide = (index) => {
    setActiveSlide(index);
  };
  return (
    <div className="p-5 w-full relative  md:mt-10">
      {/* bar */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[95%] m-auto h-[5px] bg-zinc-300 rounded-full flex items-center gap-3 ">
        {steps.map((step, i) => {
          return (
            <span
              onClick={() => {
                handleChangeActiveSlide(i);
                setSteps((prevSteps) =>
                  prevSteps.map((step, index) => ({
                    ...step,
                    isActive: index === i,
                  }))
                );
              }}
              key={i}
              className={`${
                step.isActive
                  ? "bg-neora-blue mr-auto text-white"
                  : "bg-zinc-200"
              } w-[45px] h-[45px] md:w-[50px] md:h-[50px] rounded-full grid place-items-center border-4 border-white text-sm md:text-lg cursor-pointer hover:bg-neora-blue-faded hover:text-white`}
            >
              {step.id + 1}
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default ProgressionBar;
