import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";

export default function CreateAccount() {
    const navigate = useNavigate(); // Initialize the navigate hook
    const [password, setPassword] = useState(""); // State for password
    const [repeatPassword, setRepeatPassword] = useState(""); // State for repeat password
    const [errorMessage, setErrorMessage] = useState(""); // State for error message

    const handleGoBack = () => {
        navigate(-1); // Go back to the previous page
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission

        // Check if passwords match
        if (password !== repeatPassword) {
            setErrorMessage("Passwords do not match!"); // Set error message if passwords don't match
            return; // Exit the function to prevent navigation
        }

        // Clear the error message since passwords match
        setErrorMessage("");

        // Proceed with account creation logic (e.g., API call)
        console.log("Account created successfully");

        // Navigate to the choose genre page after successful account creation
        navigate("/choose-genre");
    };

    return (
        <>
            <section className="login-section">
                <img src={Logo} alt="logo for uMusic" className="logo " />
                <h1 className="logoName logo-margin logo-create-margin">uMusic</h1>
                <h2>Create your account</h2>

                <input
                    type="text"
                    placeholder="Username:"
                    className="Username input-login"
                />
                <input
                    type="email"
                    placeholder="Email:"
                    className="Username input-login"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="Username input-login"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update password state
                />
                <input
                    type="password"
                    placeholder="Repeat Password"
                    className="Username input-login"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)} // Update repeat password state
                />

                {/* Display error message if passwords don't match */}
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <div className="navigate-button-container">
                    <button
                        className="login-button sign-in-button navigate-button"
                        type="button" // Use type="button" to prevent default form submission
                        onClick={handleGoBack} // Go back to the previous page
                    >
                        Go back
                    </button>
                    <button
                        className="login-button sign-in-button navigate-button"
                        type="button" // Use type="button" here to prevent default form submission
                        onClick={handleSubmit} // Call handleSubmit on click
                    >
                        Continue
                    </button>
                </div>
                <div>
                    <p className="placeholder-bar">placeholder for onboarding bar</p>
                </div>
            </section>
        </>
    );
}
