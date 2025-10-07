/* import useSound from "use-sound";

import boopSfx from "../../sounds/boop.mp3"; */
import { useState } from "react";
export function PlayButton() {
  /*   const mySound = require("../assets/file_name.mp3");
   */ /*   const [play, setPlay] = useState(false);
   */

  return (
    <div style={divstyle}>
      <button>
        <img
          src={require(`../theme/play.png`)}
          alt="sun"
          style={{
            visibility: "visible",
          }}
        />
      </button>
    </div>
  );
}

const divstyle = {
  display: "flex",
};

export default PlayButton;
