import React from "react";
import colors from "./colors";
import "./uploadSounds.css";
import "../css/generic.css";

export function UploadSound() {
  return (
    <div className="update-button">
      <label className="title">
        Upload a sound !
        <input type="file" accept=".mp3" />
      </label>
      <button className="button-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2M8 16V4h12l.002 12z"
          />
          <path
            fill="currentColor"
            d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4zm11-2h-2v3h-3v2h3v3h2v-3h3V9h-3z"
          />
        </svg>
      </button>
    </div>
  );
}

export default UploadSound;
