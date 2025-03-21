import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const divRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const handlePlayPause = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        // Try to play the audio when the div is visible
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log("Autoplay prevented:", err));
      } else {
        // Pause when out of view
        audio.pause();
        setIsPlaying(false);
      }
    };

    const observer = new IntersectionObserver(handlePlayPause, {
      threshold: 0.5, // Adjust to trigger play/pause when 50% of the div is visible
    });

    if (divRef.current) observer.observe(divRef.current);

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return (
    <div ref={divRef} style={{ height: "3px" }} className=" invisible">
      <audio ref={audioRef} loop>
        <source src="/bgPlay3.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button
        onClick={() => {
          const audio = audioRef.current;
          if (isPlaying) {
            audio.pause();
          } else {
            audio
              .play()
              .catch((err) => console.log("Autoplay prevented:", err));
          }
          setIsPlaying(!isPlaying);
        }}
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
    </div>
  );
}
