//components
import MostPopularSoundsComponent from "../components/MostPopularSoundsComponent";
import UploadSound from "../components/UploadSound";
import Navbar from "../components/Navbar";
import MostDownloaded from "../components/MostDownloaded";
import PopularCategories from "../components/PopularCategories";
//style
import "../css/navbar.css";
import "../css/home-page.css";
import "../css/generic.css";

function HomeScreen() {
  return (
    <div className="web-container">
      <Navbar />
      <div className="widgets">
        <PopularCategories />
        <MostDownloaded />
        <MostPopularSoundsComponent />
        <UploadSound />
      </div>
    </div>
  );
}
export default HomeScreen;
