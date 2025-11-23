//components
import Navbar from "../components/Navbar";

//style
import "../css/navbar.css";
import "../css/home-page.css";
import "../css/settings.css";
import "../css/generic.css";

function SettingScreen() {
  // rendering each sound with TrackPlayer (play/pause)

  return (
    <div className="main">
      <Navbar />
      <p className="title"> Settings </p>
      <div className="menu">
        <button> My account </button>
        <button> Stockage </button>
        <button> Modèle d'abonnement </button>
        <button> Log out </button>
      </div>
    </div>
  );
}
export default SettingScreen;
