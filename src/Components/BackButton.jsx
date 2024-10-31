import { useNavigate } from "react-router-dom"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function BackButton(){
    const navigate = useNavigate();
   
    return (
     <FontAwesomeIcon icon={faChevronLeft} className="back-button" onClick={()=>{
        navigate(-1)
     }} />
    )
}