import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth"; // Import Firebase method
import { auth } from "../Components/Firebase/Firebase-config"; // Firebase configuration
import Logo from "../images/logo.png";

export default function CreateAccount({ setOnboardingComplete }) {
  //setting up states to keep information about the user when creating a profile
  const navigate = useNavigate(); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [repeatPassword, setRepeatPassword] = useState(""); 
  const [username, setUsername] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); 

  //handles a go back button using useNavigate to navigate -1 to the previus page
  const handleGoBack = () => {
    navigate(-1); 
  };
//handle continue button, prevent default so it doesnt submit before the rest of the function is completed
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if passwords matches repleat password
    if (password !== repeatPassword) {
      setErrorMessage("Passwords do not match!"); // Set error message if passwords don't match
      return; 
    }

    // Clear the error message since passwords match
    setErrorMessage("");

    try {
      // Create account using Firebase Authentication and method createUserWithEmailAndPassword
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; // Get user object
      const uid = user.uid
      // Call function to create user data in the database takes
      await createUser(user.uid, username, email);
      localStorage.setItem("uid", uid); // Store the UID
      console.log(uid)
      // setting onboarding complete to false since they arent done with the create account
        setOnboardingComplete(false)
      //navigates to the next page in the account creation passes uid to the next page
        navigate("/choose-genre", { state: { uid: user.uid} }); 
    } catch (error) {
      // Handle any errors during account creation
      setErrorMessage(error.message);
    }
  };

  // Function to store user data in Firebase Realtime Database
  const createUser = async (uid, username, email) => {
    const url = `https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`; // URL to store user data
    const response = await fetch(url, {
      method: "PUT", // Use PUT to create the user data
      
      body: JSON.stringify({ username, email }) // Include username and email in the body
    });
    if (!response.ok) {
      console.log("Sorry, something went wrong"); // checks for error
    }
  };
//jsx for the create account page, 
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
          type="button" 
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

    </section>
  );
}
