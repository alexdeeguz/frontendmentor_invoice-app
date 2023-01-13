import { useNavigate } from "react-router-dom";
import "../common.css"

const BackButton = () => {
    const navigate = useNavigate()
    
    return (
      <div className="back-btn" onClick={() => navigate(-1)}>
        <img src="/assets/icon-arrow-left.svg" alt="left arrow" />
        <p>Go back</p>
      </div>
    );
}

export default BackButton