import { useState } from "react";
import placeholder from "../images/image-placeholder.png";

export default function ProfileImageUpload({ uid }) {
  const [image, setImage] = useState(null); // State for the uploaded image

  // Function to handle image upload
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the uploaded file
    if (file) {
      const reader = new FileReader(); // Create a FileReader to read the file
      reader.onloadend = () => {
        setImage(reader.result); // Set the image state with the file's data URL
        uploadImage(reader.result); // Upload the image after it's loaded
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  // Function to upload image URL to Firebase
  const uploadImage = async (imageData) => {
    const url = `https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`;

      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          profileImage: imageData, // Store the image data URL in Firebase
        }),
      });

      if (!response.ok) {
        console.error("Error uploading image to Firebase");
      } else {
        console.log("Image uploaded successfully");
      }
 
  };

  return (
    <div className="image-upload-container">
      <label htmlFor="upload">
        <div className="image-placeholder">
          {image ? (
            <img src={image} alt="Profile" className="profile-image" />
          ) : (
            <img src={placeholder} alt="Profile" className="profile-image" />
          )}
        </div>
      </label>
      <input
        type="file"
        id="upload"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }} // Hide the file input
      />
    </div>
  );
}
