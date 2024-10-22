import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation to access passed state
import ProfileImageUpload from "../Components/ProfileImageUpload";
import { useState } from "react";

export default function CompleteProfile({ setOnboardingComplete }) {
    const navigate = useNavigate();
    const location = useLocation(); // Get the location object
    const { uid, username, email } = location.state; // Retrieve the user data

    const [bio, setBio] = useState("");
    const [birthday, setBirthday] = useState("");
    const [pronouns, setPronouns] = useState("");
    const [countryLanguage, setCountryLanguage] = useState("");
    const [newsletter, setNewsletter] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);

    const updateUserProfile = async (uid) => {
        const url = `https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`;
        const response = await fetch(url, {
            method: "PATCH",
            body: JSON.stringify({
                bio,
                birthday,
                pronouns,
                countryLanguage,
                newsletter,
                termsAccepted
            })
        });
        if (!response.ok) {
            console.log("Sorry, something went wrong while updating the user profile.");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateUserProfile(uid); // Use the UID from the state
        setOnboardingComplete(true);
        navigate("/"); // Redirect to home or dashboard
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <section className="login-section"> 
            <h1>Personal Information</h1>           
            <ProfileImageUpload/>

            <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Bio"
                className="Username input-login"
                rows="5"
            />
                
            <input
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                placeholder="Birthday:"
                className="Username input-login"
            />
            
            <input
                type="text"
                value={pronouns}
                onChange={(e) => setPronouns(e.target.value)}
                placeholder="Pronouns:"
                className="Username input-login"
            />
            <input
                type="text"
                value={countryLanguage}
                onChange={(e) => setCountryLanguage(e.target.value)}
                placeholder="Country/Language"
                className="Username input-login"
            />
            
            <div className="radio-container">
                <label className="checkbox-container">
                    <p>Newsletter</p>
                    <input 
                        type="checkbox" 
                        name="newsletter" 
                        className="check-style"
                        checked={newsletter}
                        onChange={() => setNewsletter(!newsletter)} // Toggle newsletter state
                    />
                </label>

                <label className="checkbox-container">
                    <div>
                        <p>Terms and Conditions </p>
                        <a href="/terms">Read here</a>
                    </div>
                    <input 
                        type="checkbox" 
                        name="terms" 
                        className="check-style" 
                        checked={termsAccepted}
                        onChange={() => setTermsAccepted(!termsAccepted)} // Toggle terms accepted state
                    />
                </label>
            </div>

            <div className="navigate-button-container ">
                <button
                    className="login-button sign-in-button navigate-button"
                    type="button"
                    onClick={handleGoBack}
                >
                    Go back
                </button>
                <button
                    className="login-button sign-in-button navigate-button"
                    type="button"
                    onClick={handleSubmit}
                >
                    Finish
                </button>
            </div>
            <div>
                <p className="placeholder-bar">placeholder for onboarding bar</p>
            </div>
        </section>
    );
}
