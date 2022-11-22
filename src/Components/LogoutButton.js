import {useNavigate} from "react-router-dom";
import AuthService from "../Services/AuthService";
import {Layout} from "./Layout";

const LogoutButton = () => {

    let navigate = useNavigate();

    function handleClick() {
        AuthService.logout();
        navigate("/");
        window.location.reload();
    }

    return (
        <button className="LogoutButton" type="button" onClick={handleClick}>
            Log out
        </button>
    );
}

export default LogoutButton;
