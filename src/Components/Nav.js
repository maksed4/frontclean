import { useEffect, useState } from "react"
import AuthService from "../Services/AuthService";
import { Link } from "react-router-dom"
import Logo from "../images/Logo.png"

const Nav = () => {
    const [loggedInUser, SetLoggedInUser] = useState(null);

    useEffect(() => {
        if (AuthService.getCurrentUser()) {
            SetLoggedInUser(AuthService.getCurrentUser())
        }
    }, []);

    return(
        loggedInUser ?
        <nav>
            <ul className="Nav">
                <img src={Logo} alt="Logotype Städa Fint AB" width="150" height="100"></img>
                <ul className="Link"><Link to="Hem">HEM</Link></ul>
                <ul className="Link"><Link>BOKA STÄDNING</Link></ul>
                <ul className="Link"><Link to="MinaSidor">MINA SIDOR</Link></ul>
            </ul>
        </nav>
        :
        <></>
    );
}

export default Nav;