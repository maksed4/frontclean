import { useNavigate } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";

const CleanerNav = () => {

    let navigate = useNavigate();

    function handleClick() {
        AuthService.logout();
        navigate("/");
        window.location.reload();
    }

    return(
        <nav>
            <ul className="Nav">
                <img src={Logo} alt="Logotype Städa Fint AB" width="150" height="100"></img>
                <ul className="Link"><Link to="Hem">HEM</Link></ul>
                <ul className="Link"><Link>MINA STÄDNING</Link></ul>
                <ul className="Link"><Link to="MinaSidor">MINA SIDOR</Link></ul>
            </ul>
            <button type="button" onClick={handleClick}>
                Log out
            </button>
        </nav>
    );
}

export default CleanerNav;