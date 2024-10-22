import { useNavigate } from "react-router-dom";
import ProfileImageUpload from "../Components/ProfileImageUpload";

export default function CompleteProfile(){

    const navigate = useNavigate(); // Initialize the navigate hook
    const handleGoBack = () => {
        navigate(-1); // Go back to the previous page
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission

        navigate("/");
    };


    return (
        <>
        <section className="login-section"> 
        <h1>Pesonal information</h1>           
          <ProfileImageUpload/>

            <textarea
                    type="text"
                    placeholder="Bio"
                    className="Username input-login"
                    rows="5"
                />
                
            <input
                type="date"
                placeholder="Birthday:"
                className="Username input-login"
            />
            
            <input
                    type="text"
                    placeholder="Pronouns:"
                    className="Username input-login"
                />
            <input
                    type="language"
                    placeholder="Country/Language"
                    className="Username input-login"
                />
                <div className="radio-container">
              
                <label className="checkbox-container">
                    <p>Newsletter</p>
                    <input type="checkbox" name="newsletter" value="dontknowyet" className="check-style"/>
                </label>

                <label className="checkbox-container">
                    <div>
                    <p>terms and condtions </p>
                    <a href="/terms">Read here</a>
                    </div>
                    <input type="checkbox" name="terms" value="dontknowyet" className="check-style" />

                </label>

                </div>

            <div className="navigate-button-container ">
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
                        Finish
                    </button>
                    
                </div>
                <div>
                <p className="placeholder-bar">placeholder for onboarding bar</p>
            </div>
            </section>


            </>


    )
}