import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/AuthService";
import { Link } from "react-router-dom"
import Logo from "../images/Logo.png"

const Nav = () => {
    const [loggedInUser, SetLoggedInUser] = useState(null);

    let navigate = useNavigate();

    useEffect(() => {
        if (AuthService.getCurrentUser()) {
            SetLoggedInUser(AuthService.getCurrentUser())
        }
    }, []);

    function handleClick() {
        AuthService.logout();
        navigate("/");
        window.location.reload();
    }

    return(
        loggedInUser ?
        <nav>
            <ul className="Nav">
                <img src={Logo} alt="Logotype Städa Fint AB" width="150" height="100"></img>
                <ul className="Link"><Link to="Hem">HEM</Link></ul>
                <ul className="Link"><Link>BOKA STÄDNING</Link></ul>
                <ul className="Link"><Link to="MinaSidor">MINA SIDOR</Link></ul>
            </ul>
            <button type="button" onClick={handleClick}>
                Log out
            </button>
        </nav>
        :
        <></>
    );
}

export default Nav;