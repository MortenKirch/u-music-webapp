import { useState } from "react";
import placeholder from "../images/image-placeholder.png"

export default function ProfileImageUpload() {
  const [image, setImage] = useState(null); // State for the uploaded image

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the uploaded file
    if (file) {
      const reader = new FileReader(); // Create a FileReader to read the file
      reader.onloadend = () => {
        setImage(reader.result); // Set the image state with the file's data URL
      };
      reader.readAsDataURL(file); // Read the file as a data URL
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
