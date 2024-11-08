import React, { useRef, useState, useEffect } from 'react';

const VideoCard = ({ video }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // Volume from 0 to 1
  const [progress, setProgress] = useState(0);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handleTimeUpdate = () => {
    const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(currentProgress);
  };

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
  };

  useEffect(() => {
    videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div className="m-4 rounded-lg shadow-lg overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-40 object-cover cursor-pointer"
        onClick={handlePlayPause}
      >
        <source src={video.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="p-4">
        <h3 className="font-semibold">{video.title}</h3>
        <p>{video.description}</p>

        {/* Custom Controls */}
        <div className="flex items-center justify-between mt-2">
          {/* Play/Pause Button */}
          <button onClick={handlePlayPause} className="bg-transparent border-0">
            {isPlaying ? (
              <span className="material-icons">pause</span>
            ) : (
              <span className="material-icons">play_arrow</span>
            )}
          </button>

          {/* Progress Bar */}
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            className="flex-grow mx-2 appearance-none h-2 bg-gray-300 rounded-lg cursor-pointer"
          />

          {/* Volume Control */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-32 appearance-none h-2 bg-gray-300 rounded-lg cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;