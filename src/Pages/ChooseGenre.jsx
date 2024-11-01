import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Logo from "../images/logo.png";

export default function ChooseGenre() {
    const navigate = useNavigate();
    const location = useLocation();
    //takes uid from useLocation state
    const { uid } = location.state;
    const [selectedGenres, setSelectedGenres] = useState([]);
    const containerRef = useRef(null);
// Array of music genres to display as selectable "genre bubbles"
const genres = ["Pop", "Rock", "Jazz", "Hip-Hop", "Classical", "Electronic", "Blues", "Reggae", "Country", "Metal", "Folk", "Soul", "R&B", "Punk", "Funk", "Disco"];

// Function to handle clicks on genre bubbles
// Takes a genre as an argument and toggles its selection state
const handleGenreClick = (genre) => {
    // Check if the clicked genre is already in the selectedGenres array
    if (selectedGenres.includes(genre)) {
        // If the genre is already selected, remove it from selectedGenres
        // Creates a new array excluding the clicked genre using filter
        setSelectedGenres(selectedGenres.filter(g => g !== genre));
    } else {
        // If the genre is not already selected, add it to selectedGenres
        // Creates a new array by spreading selectedGenres and appending the new genre
        setSelectedGenres([...selectedGenres, genre]);
    }
};

// makes a fetch patch, so that your account will get genres added to the database
    const updateUserGenres = async (uid, genres) => {
        const url = `https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`;
        const response = await fetch(url, {
            method: "PATCH",
            body: JSON.stringify({ genres })
        });
        // error handling if response is not working
        if (!response.ok) {
            console.log("Sorry, something went wrong");
        }
    };
// makes a variable to say you need atleast 3 genres
    const canProceed = selectedGenres.length >= 3; 

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (canProceed) {
            await updateUserGenres(uid, selectedGenres);
            navigate("/finish-profile", { state: { uid } });
        }
    };

    // useEffect to handle scroll position 
    useEffect(() => {
        const dragContainer = document.querySelector(".bubble-drag-container");
        const bubbleContainer = document.querySelector(".bubble-container");
    
        if (dragContainer && bubbleContainer) {
            // Calculate the center points for both horizontal and vertical scroll
            dragContainer.scrollLeft = (bubbleContainer.scrollWidth - dragContainer.clientWidth) / 2.5;
            dragContainer.scrollTop = (bubbleContainer.scrollHeight - dragContainer.clientHeight) / 3;
        }
    }, []); // Empty dependency array means this runs once after the initial render

    //simple math to make the width of the onbaording bar
    const totalSteps = 3; // Total onboarding steps
    const completedSteps = 1; // Current completed step 
    const progressPercentage = ((completedSteps / totalSteps) * 100) + '%';
    
    return (
        <section className="login-section locked-section">
            <img src={Logo} alt="logo for uMusic" className="logo" />
            <h1 className="logoName logo-margin">uMusic</h1>
            <h2>Choose Your Favorite Genres</h2>
            <div className="bubble-drag-container">
                <div
                    className="bubble-container"
                    ref={containerRef}
                >
                    {/* maps over the array of genres to make the bubbles for all genres*/}
                    {genres.map((genre, index) => (
                        <div
                            key={index}
                            className={`bubble ${selectedGenres.includes(genre) ? 'selected' : ''}`}
                            onClick={() => handleGenreClick(genre)}
                        >
                            {genre}
                        </div>
                    ))}
                </div>
            </div>
            <div className="navigate-button-container">
                <button className="login-button sign-in-button navigate-button" type="button" onClick={() => navigate(-1)}>
                    Go back
                </button>
                <button className="login-button sign-in-button navigate-button" type="button" disabled={!canProceed} onClick={handleSubmit}>
                    Continue
                </button>
            </div>
            
            <div className="progress-bar">
                <div className="progress" style={{ width: progressPercentage }}></div>
            </div>
        </section>
    );
}
