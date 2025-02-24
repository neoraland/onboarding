import { createContext, useState } from "react";
import Carousel from "./Carousel";
import CarouselHeader from "./CarouselHeader";
import Hero from "./Hero";
import MobileCarousel from "./MobileCarousel";
import ProgressionBar from "./ProgressionBar";
export const AppState = createContext();

import video1 from "../public/videos/video1.mp4";
import video2 from "../public/videos/video2.mp4";
import video3 from "../public/videos/video3.mp4";
import video4 from "../public/videos/video4.mp4";
import video5 from "../public/videos/video5.mp4";
import video6 from "../public/videos/video6.mp4";

const App = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileCarousel, setMobileCarousel] = useState(false);
  const [steps, setSteps] = useState([
    {
      id: 0,
      isActive: true,
      title: "Determine Your Why",
      video: video1,
      description: [
        'Your "why" will help you stay focused and motivated',
        "Write down 3 reasons you started your business and 3 wins youre working towards.",
        'Its important to share with others who can support and mentor you along the way. Take action by sharing your "why" reasons and wins with your upline ASAP',
      ],
    },
    {
      id: 1,
      isActive: false,
      title: "Earn as You Learn",
      video: video2,
      description: [
        "Your perks will reflect the effort you put in. Use your mentor and support team to help you along the way and remember - youre the boss - you choose when and where you work.",
        "Define how many hours youre willing to work your business. Block your calendar on specific days and times you will dedicate effort in working your business.",
      ],
    },
    {
      id: 2,
      isActive: false,
      title: "Slide Title",
      video: video3,
      description: ["Slide Description"],
    },
    {
      id: 3,
      isActive: false,
      title: "Slide Title",
      video: video4,
      description: ["Slide Description"],
    },
    {
      id: 4,
      isActive: false,
      title: "Slide Title",
      video: video5,
      description: ["Slide Description"],
    },
    {
      id: 5,
      isActive: false,
      title: "Slide Title",
      video: video6,
      description: ["Slide Description"],
    },
  ]);
  return (
    <AppState.Provider
      value={{
        activeSlide,
        setActiveSlide,
        steps,
        setSteps,
        mobileCarousel,
        setMobileCarousel,
      }}
    >
      <div className="text-[#454545] bg-red-000 h-screen flex flex-col">
        <Hero />
        <div className="p-5">
          <button
            onClick={() => {
              setMobileCarousel(true);
            }}
            className="md:hidden w-full bg-zinc-700 text-white p-3 rounded-md"
          >
            Get Started
          </button>
        </div>
        <div className="hidden md:flex flex-col h-full overflow-hidden">
          <div className="container">
            <div className="flex justify-between"></div>
            <ProgressionBar />
            <CarouselHeader />
          </div>
          <Carousel />
        </div>
        {mobileCarousel && <MobileCarousel />}
      </div>
    </AppState.Provider>
  );
};
export default App;
