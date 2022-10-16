import React, { useEffect, useRef } from "react";
import "./Video.css";

export default function Video({src, alt}) {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div>
      <div>
        <video
          playsInline
          loop
          muted
          controls
          alt={alt}
          src={src}
          ref={videoEl}
        />
      </div>
    </div>
  );
}
