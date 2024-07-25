import { createContext, useState } from "react";
import Carousel from "./Carousel";
import CarouselHeader from "./CarouselHeader";
import Hero from "./Hero";
import ProgressionBar from "./ProgressionBar";
export const AppState = createContext();

const App = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [steps, setSteps] = useState([
    {
      id: 0,
      isActive: true,
      title: "Determine Your Why",
      description: [
        'Your "why" will help you stay focused and motivated',
        "Write down 3 reasons you started your business and 3 wins youre working towards.",
        'Its important to share with others who can support and mentor you along the way. Take action by sharing your "why" reasons and wins with your upline ASAP',
      ],
    },
    {
      id: 1,
      isActive: false,
      title: "Slide Title",
      description: ["Slide Description"],
    },
    {
      id: 2,
      isActive: false,
      title: "Slide Title",
      description: ["Slide Description"],
    },
    {
      id: 3,
      isActive: false,
      title: "Slide Title",
      description: ["Slide Description"],
    },
    {
      id: 4,
      isActive: false,
      title: "Slide Title",
      description: ["Slide Description"],
    },
    {
      id: 5,
      isActive: false,
      title: "Slide Title",
      description: ["Slide Description"],
    },
  ]);
  return (
    <AppState.Provider value={{ activeSlide, setActiveSlide, steps, setSteps }}>
      <div className="text-[#454545] bg-red-000 h-screen flex flex-col">
        <Hero />
        <div className="container">
          <ProgressionBar />
          <CarouselHeader />
        </div>
        <Carousel />
      </div>
    </AppState.Provider>
  );
};
export default App;
