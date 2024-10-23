import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Components/Firebase/Firebase-config"; // Import the auth instance from firebase.js
import { signInWithEmailAndPassword } from "firebase/auth"; // imports firebase method
import Logo from "../images/logo.png";
//makes function for login screen, passed data from app.jsx "setIsAuth and setOnboardingComplete States"
export default function LoginScreen({ setIsAuth, setOnboardingComplete }) {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();


      try{// Sign in using Firebase Authentication checks if email and password is the same as the databases
      await signInWithEmailAndPassword(auth, email, password);
      setIsAuth(true); // Set authentication state
      setOnboardingComplete(true)
      localStorage.setItem("onboardingComplete", JSON.stringify(true)) // sets onboarding state into local storrage to make sure users onboard is complete.
      localStorage.setItem("isAuth", JSON.stringify(true)); // Store authentication state
      navigate('/'); // Navigate to the home screen "private routes"
    } catch{
      console.log("error")
    }
  };

  const handleSignUp = () => {
    navigate('/create-account'); // Navigate to sign-up page
  };

  const handleContinue = () => {
    setIsAuth(true); // Simulate guest login
    localStorage.setItem("isAuth", true);
    setOnboardingComplete(true) // sets onboarding state
    navigate('/'); // Navigate to the private routes
  };

  return (
    <section className="login-section">
      <img src={Logo} alt="logo for uMusic" className="logo" />
      <h1 className="logoName logo-margin">uMusic</h1>

      <input 
        type="email" 
        placeholder="Email" 
        className="Username input-login" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} // Update email state
      />
      <div className="input-container">
        <p>Forgotten your Email?</p> 
        <a href="#">Click here</a>
      </div>
      
      <input 
        type="password" 
        placeholder="Password" 
        className="Password input-login" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} // Update password state
      />
      <div className="input-container">
        <p>Forgotten your password?</p> 
        <a href="#">Click here</a>
      </div>
      <div className="button-container">
        <button className="login-button sign-in-button" type="submit" onClick={handleLogin}>
          SIGN IN
        </button>
        <button className="login-button create-button" type="button" onClick={handleSignUp}>
          CREATE ACCOUNT
        </button>
        <button className="login-button continue-button" type="button" onClick={handleContinue}>
          CONTINUE AS GUEST
        </button>
      </div>
    </section>
  );
}
