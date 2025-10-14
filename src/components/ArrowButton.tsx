// style
import "../css/mostPopularSounds.css";
import "../css/generic.css";

function ArrowButton({ pic }: any) {
  return (
    <button className="arrow-button">
      <img src={pic} className="icon" />
    </button>
  );
}

export default ArrowButton;
