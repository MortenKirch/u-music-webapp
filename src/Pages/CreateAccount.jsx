import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth"; // Import Firebase method
import { auth } from "../Components/Firebase/Firebase-config"; // Firebase configuration
import Logo from "../images/logo.png";

export default function CreateAccount({ setOnboardingComplete }) {
  const navigate = useNavigate(); // Initialize the navigate hook
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [repeatPassword, setRepeatPassword] = useState(""); // State for repeat password
  const [username, setUsername] = useState(""); // State for username
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  
  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Check if passwords match
    if (password !== repeatPassword) {
      setErrorMessage("Passwords do not match!"); // Set error message if passwords don't match
      return; // Exit the function to prevent further action
    }

    // Clear the error message since passwords match
    setErrorMessage("");

    try {
      // Create account using Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; // Get user object

      // Call function to create user data in the database
      await createUser(user.uid, username, email);

      // Complete onboarding after successful account creation
        setOnboardingComplete(false)
        navigate("/choose-genre", { state: { uid: user.uid} }); // Navigate to the next page
    } catch (error) {
      // Handle any errors during account creation
      setErrorMessage(error.message);
    }
  };

  // Function to store user data in Firebase Realtime Database
  const createUser = async (uid, username, email) => {
    const url = `https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`; // URL to store user data
    const response = await fetch(url, {
      method: "PUT", // Use PUT to create or update the user data
      body: JSON.stringify({ username, email }) // Include username and email in the body
    });
    if (!response.ok) {
      console.log("Sorry, something went wrong"); // Handle errors
      setErrorMessage("Failed to create user data."); // Set error message
    }
  };

  return (
    <section className="login-section">
      <img src={Logo} alt="logo for uMusic" className="logo " />
      <h1 className="logoName logo-margin logo-create-margin">uMusic</h1>
      <h2>Create your account</h2>

      <input
        type="text"
        placeholder="Username"
        className="Username input-login"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // Update username state
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="Username input-login"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Update email state
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="Username input-login"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Update password state
        required
      />
      <input
        type="password"
        placeholder="Repeat Password"
        className="Username input-login"
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)} // Update repeat password state
        required
      />

      {/* Display error message if passwords don't match or Firebase throws an error */}
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
          type="submit" // Use type="submit" for form submission
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
