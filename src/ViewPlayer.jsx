import { useRef, useState } from "react";
import video1 from "./videos/video1.mp4";

const ViewPlayer = ({ video }) => {
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
    <div>
      <video
        ref={videoRef}
        src={video1}
        autoPlay
        className="w-full h-auto max-w-["
        onEnded={handleVideoEnd}
      >
        Your browser does not support the video tag.
      </video>
      {showReplayButton && (
        <button
          onClick={handleReplay}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Play Again
        </button>
      )}
    </div>
  );
};
export default ViewPlayer;
