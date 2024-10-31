import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profilePic from "../images/cat.jpg";
import "../App.css";
// Artists
import artist1 from "../images/noah-kahan.webp";
import artist2 from "../images/Kendrick-lamar.jpeg";
import artist3 from "../images/Drake.jpeg";
import artist4 from "../images/Eminem.jpeg";
// Songs
import sang1 from "../images/Rap god.png";
// Albums
import album1 from "../images/Album1.jpg";

export default function Profile({ setOnboardingComplete }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false); // State for following status
  const uid = localStorage.getItem("uid");
  const navigate = useNavigate();

  function handleClick() {
    setOnboardingComplete(false);
    navigate("/create-account");
  }

  useEffect(() => {
    const fetchUserData = async () => {
      const url = `https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data) {
          setUserData(data);
          setIsFollowing(data.isFollowing || false); // Initialize following status
          if (data.profileImage) {
            setImageUrl(data.profileImage);
          }
        } else {
          console.log("No user data found.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData(); // Call the fetch function
  }, [uid]);

  const handleFollowToggle = async () => {
    const newFollowingStatus = !isFollowing;
    const updatedFollowersCount = newFollowingStatus
      ? (userData.followers || 0) + 1
      : (userData.followers || 0) - 1;

    setIsFollowing(newFollowingStatus);

    // Update user data in Firebase
    const url = `https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`;
    await fetch(url, {
      method: "PATCH",
      body: JSON.stringify({
        followers: updatedFollowersCount,
        isFollowing: newFollowingStatus,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Update the local user data to reflect the change
    setUserData((prevData) => ({
      ...prevData,
      followers: updatedFollowersCount,
      isFollowing: newFollowingStatus,
    }));
  };

  if (!userData) {
    return (
      <>
        <div>You don't have one, create a user here</div>
        <button type="submit" onClick={handleClick}>
          Create Account
        </button>
      </>
    );
  }

  return (
    <div>
      <div className="profile-container">
        <div className="profile-header">
          <img
            src={imageUrl || profilePic}
            alt="Profile"
            className="profile-image"
          />
          <h1 className="profile-name">{userData.username || "Anonymous"}</h1>

          {/* Bio Section */}
          {userData.bio && (
            <div className="bio-box">
              <p className="bio-content">{userData.bio}</p>
            </div>
          )}

          <div className="followingsection">
            <span className="followers">
              Followers: {userData.followers || 0}
            </span>
            <span className="following">
              Following: {userData.following || 0}
            </span>
          </div>
          <button className="followme-button" onClick={handleFollowToggle}>
            {isFollowing ? "Following" : "Follow"}
          </button>
        </div>
      </div>

      {/* Rest of the Profile Sections */}
      <div className="favorit-sektion-artist">
        <h2>Favorite Artists</h2>
        <div className="artist-favorit">
          <div className="artist-card">
            <img src={artist1} alt="Noah Kahan" className="artist-image" />
            <p>Noah Kahan</p>
          </div>
          <div className="artist-card">
            <img src={artist2} alt="Kendrick Lamar" className="artist-image" />
            <p>Kendrick Lamar</p>
          </div>
          <div className="artist-card">
            <img src={artist3} alt="Drake" className="artist-image" />
            <p>Drake</p>
          </div>
          <div className="artist-card">
            <img src={artist4} alt="Eminem" className="artist-image" />
            <p>Eminem</p>
          </div>
        </div>
      </div>

      {/* Favorite Songs Section */}
      <div className="favorit-sange-sektion">
        <h2 className="favorit-songs">Favorite Songs</h2>
        <ul className="sange-list">
          <li className="sange-card">
            <div className="sang-content">
              <img src={sang1} alt="Rap God" className="sang-image" />
              <div className="song-info">
                <p className="song-title">Rap God</p>
                <p className="singer-name">Eminem, Juice WRLD</p>
              </div>
              <div className="song-details">
                <p className="timestamp">9:10</p>
                <p className="review-rating">Rating: 5/10</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* Favorite Albums Section */}
      <div className="favorit-albums">
        <h2 className="favorit-albums-title">Favorite Albums</h2>
        <div className="album-list">
          <div className="album-item">
            <img src={album1} alt="The Eminem Show" className="album-image" />
            <p className="albumnavn">The Eminem Show</p>
            <div className="album-details">
              <p className="release-date">
                2009 <span className="album-label">Album</span>
              </p>
              <p className="album-rating">Rating: 5/10</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-sektion">
        <button>Reviews</button>
        <button>Ratings</button>
        <button>Want to Listen</button>
      </div>
      <div className="review-box">
        <div className="review-header">
          <img src={imageUrl} alt="Reviewer" className="reviewer-pic" />
          <div className="reviewer-details">
            <p>{userData.username}</p>
            <div className="review-rating">
              <span>Rating 5/10</span>
            </div>
          </div>
        </div>

        <h4>Overskrift</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
        <div className="review-actions">
          <div className="heart-reply">
            <button className="heart-button">❤️</button>
            <span className="like-count">206</span>
            <span className="reply-thread">See Thread Reply</span>
          </div>
        </div>
      </div>
    </div>
  );
}
