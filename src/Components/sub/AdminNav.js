import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import LogoutButton from "../LogoutButton";

const AdminNav = () => {

    return(
        <nav>
            <ul className="Nav">
                <img src={Logo} alt="Logotype Städa Fint AB" width="150" height="100"></img>
                <ul className="Link"><Link to="Hem">HEM</Link></ul>
                <ul className="Link"><Link to="cleanings">STÄDNINGAR</Link></ul>
                <ul className="Link"><Link to="cleanings">KUNDER</Link></ul>
                <ul className="Link"><Link to="cleanings">STÄDARE</Link></ul>
                <ul className="Link"><Link to="MinaSidor">MINA SIDOR</Link></ul>
            </ul>
            <LogoutButton />
        </nav>
    );
}

export default AdminNav;
