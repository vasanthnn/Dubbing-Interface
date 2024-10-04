import React, { useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const video = videoRef.current;
    video.paused ? video.play() : video.pause();
  };

  return (
    <div>
      <video
        ref={videoRef}
        src="sample-video.mp4"
        controls
        className="w-full h-64"
      />
      <button onClick={handlePlayPause} className="mt-2 p-2 bg-blue-500 text-white">
        Play/Pause
      </button>
    </div>
  );
};

export default VideoPlayer;
