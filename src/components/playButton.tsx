import { useSound } from "react-sounds";
import "../css/audioplayer.css";

export function PlayButton() {
  const customSound = "../public/sounds/merry-christmas-sounds.mp3";

  const { play, stop, pause, resume, isPlaying, isLoaded } = useSound(
    customSound,
    {
      volume: 0.8,
      rate: 1.2,
      loop: true,
    }
  );

  const handleClick = () => {
    if (!isPlaying) {
      play();
    } else {
      stop();
    }
  };

  return (
    <div className="play-container">
      <button onClick={handleClick} disabled={!isLoaded}>
        {!isPlaying && (
          <img src={require("../theme/play.png")} className="icon" />
        )}
        {isPlaying && (
          <img src={require("../theme/pause.png")} className="icon" />
        )}
      </button>
    </div>
  );
}

const divStyle = {
  display: "flex",
};

export default PlayButton;
