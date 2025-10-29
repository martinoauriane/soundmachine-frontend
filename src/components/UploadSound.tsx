import { useState, useEffect } from "react";
import colors from "./colors";
import "./uploadSounds.css";
import "../css/generic.css";
import "../css/mostPopularSounds.css";

export function UploadSound() {
  const [mp3File, setMp3File] = useState();

  /*  const handleFileInput = (event: any) => {
    if (event.target.files) {
      console.log("works!");
      setMp3File(event.target.files[0]);
      console.log("mp3File", mp3File);
    } */

  return (
    <div className="upload-sound-component">
      <label className="balise">Upload a sound</label>
      <input type="file" accept=".mp3" /* onChange={handleFileInput} */ />
      <div className="body">
        <button className="generic-button">Upload</button>
      </div>
    </div>
  );
}

export default UploadSound;
