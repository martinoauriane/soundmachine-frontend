import "../css/audioplayer.css";

interface PlayButtonProps {
  play: () => void;
  pause: () => void;
  isPlaying: boolean;
  action?: () => void; // nouvelle prop
}
export function PlayButton({
  play,
  pause,
  isPlaying,
  action,
}: PlayButtonProps) {
  const handleClick = (isPlaying: boolean) => {
    if (!isPlaying) play();
    if (isPlaying) {
      pause();
      action?.();
    }
  };

  return (
    <div className="play-container">
      <button onClick={() => handleClick(isPlaying)} className="button">
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

export default PlayButton;
