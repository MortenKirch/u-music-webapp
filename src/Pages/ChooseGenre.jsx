import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Logo from "../images/logo.png";

export default function ChooseGenre() {
    const navigate = useNavigate();
    const location = useLocation();
    const { uid } = location.state;
    const [selectedGenres, setSelectedGenres] = useState([]);
    const containerRef = useRef(null);

    const genres = ["Pop", "Rock", "Jazz", "Hip-Hop", "Classical", "Electronic", "Blues", "Reggae", "Country", "Metal", "Folk", "Soul", "R&B", "Punk", "Funk", "Disco"];

    const handleGenreClick = (genre) => {
        if (selectedGenres.includes(genre)) {
            setSelectedGenres(selectedGenres.filter(g => g !== genre));
        } else {
            setSelectedGenres([...selectedGenres, genre]);
        }
    };

    const updateUserGenres = async (uid, genres) => {
        const url = `https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`;
        const response = await fetch(url, {
            method: "PATCH",
            body: JSON.stringify({ genres })
        });
        if (!response.ok) {
            console.log("Sorry, something went wrong");
        }
    };

    const canProceed = selectedGenres.length >= 3; // At least 3 genres to proceed

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (canProceed) {
            await updateUserGenres(uid, selectedGenres);
            navigate("/finish-profile", { state: { uid } });
        }
    };

    // useEffect to handle scroll position after the component mounts
    useEffect(() => {
        const dragContainer = document.querySelector(".bubble-drag-container");
        const bubbleContainer = document.querySelector(".bubble-container");
    
        if (dragContainer && bubbleContainer) {
            // Calculate the center points for both horizontal and vertical scroll
            dragContainer.scrollLeft = (bubbleContainer.scrollWidth - dragContainer.clientWidth) / 2.5;
            dragContainer.scrollTop = (bubbleContainer.scrollHeight - dragContainer.clientHeight) / 3;
        }
    }, []); // Empty dependency array means this runs once after the initial render

    const totalSteps = 3; // Total onboarding steps
    const completedSteps = 1; // Current completed step (this step)
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
