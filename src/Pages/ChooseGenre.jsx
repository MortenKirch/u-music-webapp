import { useNavigate } from "react-router-dom";


export default function ChooseGenre(){
    const navigate = useNavigate(); // Initialize the navigate hook
    const handleGoBack = () => {
        navigate(-1); // Go back to the previous page
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission

        navigate("/finish-profile");
    };



    return(
     <>    
     <section className="login-section">
         <p>Her skal laves en masse genre bobler, som man kan trykke på for at vægle de genre man godt kan lide</p>
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

    )
}