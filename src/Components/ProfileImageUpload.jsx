import { useState, useEffect } from "react";
import placeholder from "../images/image-placeholder.png";

export default function ProfileImageUpload({ uid }) {
  const [image, setImage] = useState(null); // State for the uploaded image
  const [imageUrl, setImageUrl] = useState(""); // State for the URL input

  // Function to upload image URL to Firebase
  const uploadImage = async (imageData) => {
    const url = `https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`;

    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        profileImage: imageData, // Store the image URL in Firebase
      }),
    });

    // Error handling for response
    if (!response.ok) {
      console.error("Error uploading image to Firebase");
    } else {
      console.log("Image uploaded successfully");
    }
  };

  // UseEffect to update image state and upload image when URL changes
  useEffect(() => {
    if (imageUrl) {
      setImage(imageUrl);
      uploadImage(imageUrl);
    }
  }, [imageUrl]);

  return (
    <div className="image-upload-container">
      <label htmlFor="upload">
        <div className="image-placeholder">
          {/* Show uploaded image if it exists; otherwise, show placeholder */}
          {image ? (
            <img src={image} alt="Profile" className="profile-image" />
          ) : (
            <img src={placeholder} alt="Profile" className="profile-image" />
          )}
        </div>
      </label>
      
      <input
        type="text"
        placeholder="Enter image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="image-url-input input-login"
      />
    </div>
  );
}
