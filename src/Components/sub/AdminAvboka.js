import axios from "axios";
import AuthService from "../../Services/AuthService";

const Avboka = (props) => {

    const handleClick = () => {
        axios.delete(`${process.env.REACT_APP_BASE_URL}/api/cleaning/cancel/${props.cleaningId}/${props.customerId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AuthService.getCurrentUser().token
            }
        });
    }

    return (
        <span>
            Nej
            <br/>
            <button
                onClick={handleClick}
            >Avboka</button>
        </span>
    );
}

export default Avboka;
