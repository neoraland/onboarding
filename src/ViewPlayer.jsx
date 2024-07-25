import { useContext, useRef, useState } from "react";
import { MdOutlineReplay } from "react-icons/md";
import video1 from "../public/videos/video1.mp4";
import { AppState } from "./App";

const ViewPlayer = ({ video }) => {
  const { mobileCarousel } = useContext(AppState);
  const [showReplayButton, setShowReplayButton] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setShowReplayButton(true);
  };

  const handleReplay = () => {
    videoRef.current.play();
    setShowReplayButton(false);
  };

  return (
    <div
      className={`${
        !mobileCarousel && "rounded-md"
      } overflow-hidden relative h-full`}
    >
      <video
        ref={videoRef}
        src={video1}
        autoPlay
        className={`${mobileCarousel && "h-[50vh] m-auto p-5"} object-cover `}
        onEnded={handleVideoEnd}
      >
        Your browser does not support the video tag.
      </video>
      {showReplayButton && (
        <button
          onClick={handleReplay}
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mt-4 px-4 py-2 bg-zinc-800 text-3xl text-white rounded"
        >
          <MdOutlineReplay />
        </button>
      )}
    </div>
  );
};
export default ViewPlayer;
