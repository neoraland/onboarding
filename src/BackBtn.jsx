import { useContext } from "react";
import { AppState } from "./App";

const BackBtn = () => {
  const { setSteps, activeSlide, setActiveSlide } = useContext(AppState);

  const handleBack = () => {
    if (activeSlide > 0) {
      const newActiveSlide = activeSlide - 1;
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
      onClick={handleBack}
      className="rounded-md p-2 md:p-3  bg-zinc-100  min-w-[100px] text-sm"
    >
      Back
    </button>
  );
};
export default BackBtn;
