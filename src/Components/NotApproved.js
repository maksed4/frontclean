import {useNavigate, useParams} from "react-router-dom";
import AuthService from "../Services/AuthService";
import {useState} from "react";

const NotApproved = () => {

    const { id } = useParams();
    let navigate = useNavigate();

    const [message, setMessage] = useState("");

    const handleClick = (cleanId, bool) => {
        let isCompleted = bool ? " godkänd!" : " ej godkänd!";

        fetch(`${process.env.REACT_APP_BASE_URL}/api/feedback/${AuthService.getCurrentUser().id}/${id}`, {
            method: 'POST',
            body: JSON.stringify({
                approved: bool,
                message: message,
                cleaningId: cleanId,
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AuthService.getCurrentUser().token
            }
        })
            .then(() => {
                navigate("/minasidor");
                window.location.reload();
                alert("Städning med id: " + cleanId + isCompleted)
            })
    }

    return(
        <div>
            <h3>Feedback</h3>
            <textarea name="message" id={id} onChange={e => setMessage(e.target.value)}></textarea>
            <br/>
            <button onClick={() => handleClick(id, true)}>Godkänn</button>
            <button onClick={() => handleClick(id, false)}>Underkänn</button>
        </div>
    );
}

export default NotApproved;
