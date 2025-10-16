import React from "react";
import colors from "./colors";
import "./uploadSounds.css";
import "../css/generic.css";

export function UploadSound() {
  return (
    <div className="update-button">
      <label className="title">Upload a sound</label>
      <input type="file" accept=".mp3" />
      <div className="body">
        <button className="generic-button">Upload</button>
      </div>
    </div>
  );
}

export default UploadSound;
