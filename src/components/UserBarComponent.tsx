import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TrackPlayer from "../components/TrackPlayer";
import "../css/navbar.css";
import "../css/home-page.css";
import "../css/my-profile.css";

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
const UserBarComponent = () => {
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

  return (
    <div className="user-bar-component">
      <div className="user-header">
        <img src={user.photoUrl} alt={user.name} className="user-photo" />
        <div className="user-info">
          <h2>{user.name}</h2>
          <div className="followers-following">
            <span>{user.followers} Followers</span> •{" "}
            <span>{user.following} Following</span>
          </div>
        </div>
        <div className="user-actions">
          <button className="btn">Settings</button>
          <button className="btn">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default UserBarComponent;
