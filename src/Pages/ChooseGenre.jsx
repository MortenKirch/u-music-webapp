import { useNavigate, useLocation } from "react-router-dom"; // Importing hooks for navigation and location
import { useState } from "react";
import Logo from "../images/logo.png"; // Ensure to import your logo if needed

export default function ChooseGenre({ setOnboardingComplete }) {
    const navigate = useNavigate();
    const location = useLocation();
    const { uid} = location.state; // Get the passed data
    const [selectedGenres, setSelectedGenres] = useState([]);

    // List of available genres
    const genres = ["Pop", "Rock", "Jazz", "Hip-Hop", "Classical", "Electronic", "Blues", "Reggae", "Country"];

    // Handle genre selection/deselection
    const handleGenreClick = (genre) => {
        if (selectedGenres.includes(genre)) {
            setSelectedGenres(selectedGenres.filter(g => g !== genre)); // Deselect genre
        } else if (selectedGenres.length < 3) {
            setSelectedGenres([...selectedGenres, genre]); // Select genre
        }
    };

    // Check if the user can proceed (needs at least 3 genres)
    const canProceed = selectedGenres.length >= 3;

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateUserGenres(uid, selectedGenres); // Update user data with selected genres
        
        navigate("/finish-profile", { state: { uid} }); // Navigate to the next page
    };

    // Function to update user data in Firebase
    const updateUserGenres = async (uid, genres) => {
        const url = `https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`;
        const response = await fetch(url, {
            method: "PATCH", // Use PATCH to update existing user data
            body: JSON.stringify({ genres }) // Add selected genres to the user data
        });
        if (!response.ok) {
            console.log("Sorry, something went wrong");
        }
    };

    return (
        <section className="login-section">
            <img src={Logo} alt="logo for uMusic" className="logo" />
            <h1 className="logoName logo-margin">uMusic</h1>
            <h2>Choose Your Favorite Genres</h2>
            <div className="bubble-container">
                {genres.map((genre, index) => (
                    <div
                        key={index}
                        className={`bubble ${selectedGenres.includes(genre) ? 'selected' : ''}`}
                        onClick={() => handleGenreClick(genre)} // Handle genre selection
                    >
                        {genre}
                    </div>
                ))}
            </div>
            <div className="navigate-button-container">
                <button 
                    className="login-button sign-in-button navigate-button" 
                    type="button" 
                    onClick={() => navigate(-1)} // Go back
                >
                    Go back
                </button>
                <button 
                    className="login-button sign-in-button navigate-button" 
                    type="button" 
                    disabled={!canProceed} // Disable button if less than 3 genres are selected
                    onClick={handleSubmit} // Call handleSubmit on click
                >
                    Continue
                </button>
            </div>
            <div>
                <p className="placeholder-bar">placeholder for onboarding bar</p>
            </div>
        </section>
    );
}
