import "./videoCard.css";
import { useState } from "react";

let VideoCard = () => {
  let [playing, setPlaying] = useState(false);

  return (
    <>
      <div className="video-card">
        <video
          onClick={(e) => {
            if (!playing) {
              e.currentTarget.play();
              setPlaying(true);
            } else {
              e.currentTarget.pause();
              setPlaying(false);
            }
          }}
          src="https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4 "
          loop
        ></video>
        <p>Fake User</p>
        <span className="comment">
          <span class="material-icons-outlined">chat_bubble_outline</span>
        </span>
        <span className="like">
          <span class="material-icons-outlined">favorite_border</span>
        </span>
        <marquee>Some song</marquee>
      </div>
    </>
  );
};

export default VideoCard;
