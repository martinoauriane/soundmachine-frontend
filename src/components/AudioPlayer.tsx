import React from "react";
import PlayButton from "./playButton";

type Track = {
  title: string;
  author: string;
  creationDate: String;
  category: String;
};

export function track() {
  return (
    <div style={divstyle}>
      <p> sound name </p>
      <PlayButton />
    </div>
  );
}

const divstyle = {
  display: "flex",
};
