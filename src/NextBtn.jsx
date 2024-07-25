import { useContext } from "react";
import { AppState } from "./App";

const NextBtn = () => {
  const { steps, setSteps, activeSlide, setActiveSlide } = useContext(AppState);

  const handleNext = () => {
    if (activeSlide < steps.length - 1) {
      const newActiveSlide = activeSlide + 1;
      setActiveSlide(newActiveSlide);
      setSteps((prevSteps) =>
        prevSteps.map((step, index) => ({
          ...step,
          isActive: index === newActiveSlide,
        }))
      );
    }
  };

  return (
    <button
      onClick={handleNext}
      className={`${
        activeSlide === steps.length - 1 ? "bg-neora-blue" : "bg-zinc-700"
      } ml-auto rounded-md p-2 lg:p-3  text-white min-w-[100px] text-sm`}
    >
      {activeSlide === steps.length - 1 ? "Complete" : "Next"}
    </button>
  );
};
export default NextBtn;
