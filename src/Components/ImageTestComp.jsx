import { useEffect, useState } from "react";


export default function ProfileImageDisplay() {
 
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

const uid = "hxTpywnNoYbth4WrEWHISiTnDxf2";
  useEffect(() => {
    const fetchImage = async () => {
      const url = `https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        if (data && data.profileImage) {
          setImageUrl(data.profileImage); // Set the image URL from Firebase
        } else {
          console.log("No image found for this user.");
        
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      } finally {
        setLoading(false); // Stop loading once the fetch is complete
      }
    };

    fetchImage(); // Call the fetch function
  }, [uid]); // Run this effect when uid changes

  return (
    <div className="profile-image-display">
      {loading ? (
        <p>Loading image...</p> // Loading state
      ) : (
        imageUrl ? (
          <img src={imageUrl} alt="Profile" className="profile-image" />
        ) : (
          <p>No profile image available.</p> // No image found
        )
      )}
    </div>
  );
}
