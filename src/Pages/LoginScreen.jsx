import { useNavigate} from "react-router-dom";
import Logo from "../images/logo.png";



export default function LoginScreen() {
<<<<<<< Updated upstream
  return <p>Login content goes here</p>;
=======

  const navigate = useNavigate(); // Initialize the hook

  const handleLogin = (event) => {
    event.preventDefault()
    navigate('/'); 
  };


  const handleSignUp = () => {
    
    navigate('/create-account'); 
  };

  const handleContinue = () => {
    
    navigate('/'); 
  };

  return (
    <section className="login-section">
      <img src={Logo} alt="logo for uMusic" className="logo" />
      <h1 className="logoName logo-margin">uMusic</h1>

      <input type="text" placeholder="Username" className="Username input-login" />
      <div className="input-container">
        <p>Forgotten your Username?</p> 
        <a href="#">Click here</a>
      </div>
      
      <input type="password" placeholder="Password" className="Password input-login" />
      <div className="input-container">
        <p>Forgotten your password?</p> 
        <a href="#">Click here</a>
      </div>
      <div className="button-container">
      <button className="login-button sign-in-button" type="submit" onClick={handleLogin}>SIGN IN</button>
      <button className="login-button create-button" type="button" onClick={handleSignUp}>CREATE ACCOUNT</button>
      <button className="login-button continue-button" type="button" onClick={handleContinue}>CONTINUE AS GUEST</button>
      </div>
    </section>
  );
>>>>>>> Stashed changes
}
