export interface Song {
  name: String;
  url: String;
  type: string;
  creationDate: String;
}

export const categories = [
  "Funk",
  "Electronica",
  "Hip Hop and R&B",
  "Rock",
  "Factory and Warehouse",
  "Drums",
  "Guitar",
  "Synth Keys",
  "Piano",
  "Bass",
  "Ambient",
  "Punk",
  "Disco",
  "Pop",
  "Commercial",
  "Jungle",
];

export const soundsArray: Song[] = [
  {
    name: "Merry Christmas",
    url: "/sounds/merry-christmas-sounds.mp3",
    type: "Commercial",
    creationDate: "11/10/2025",
  },
  {
    name: "Emotional Ambient",
    url: "/sounds/emotional-ambient.mp3",
    type: "Ambient",
    creationDate: "10/10/2025",
  },
  {
    name: "Jungle Waves",
    url: "/sounds/jungle-waves.mp3",
    type: "Jungle",
    creationDate: "9/10/2025",
  },
];
