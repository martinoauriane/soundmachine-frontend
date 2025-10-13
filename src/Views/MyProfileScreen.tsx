import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TrackPlayer from "../components/TrackPlayer";
import "../css/navbar.css";
import "../css/widgets.css";
import "../css/my-profile.css";
import UserBarComponent from "../components/UserBarComponent";

// utils
import { Song } from "../utils";
import { soundsArray } from "../utils";

export interface UserProfile {
  name: string;
  photoUrl: string;
  followers: number;
  following: number;
  library: Song[];
  uploaded: Song[];
}

const UserProfileScreen = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [activeTab, setActiveTab] = useState<"library" | "uploaded">("library");

  useEffect(() => {
    // ici tu peux récupérer les données depuis ton backend
    const mockUser: UserProfile = {
      name: "John Doe",
      photoUrl: "https://via.placeholder.com/150",
      followers: 120,
      following: 75,
      library: soundsArray.slice(0, 3), // tracks achetés/téléchargés
      uploaded: soundsArray.slice(3, 6), // tracks uploadés
    };
    setUser(mockUser);
  }, []);

  if (!user) return <div>Loading...</div>;

  const tracksToShow = activeTab === "library" ? user.library : user.uploaded;

  return (
    <div className="main">
      <Navbar />
      <UserBarComponent />

      <div className="tabs">
        <button
          className={activeTab === "library" ? "tab active" : "tab"}
          onClick={() => setActiveTab("library")}
        >
          Library
        </button>
        <button
          className={activeTab === "uploaded" ? "tab active" : "tab"}
          onClick={() => setActiveTab("uploaded")}
        >
          Uploaded
        </button>
      </div>

      <div className="tracks-list">
        {tracksToShow.map((track) => (
          <div className="rendering-track" /* key={track.name} */>
            <TrackPlayer trackName={track.name} trackUrl={track.url} />
          </div>
        ))}
      </div>

      <audio controls loop>
        <source src="../../public/sounds/fakesound.mp3"></source>
      </audio>
    </div>
  );
};

export default UserProfileScreen;
