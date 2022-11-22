import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/AuthService";
import UserMinaSidor from "./sub/UserMinaSidor";
import CleanerSidor from "./sub/CleanerSidor";
import Sidor from "../images/Sidor.png"

const MinaSidor = () => {

    let navigate = useNavigate();

    const [loggedInUser, SetLoggedInUser] = useState({
        id: 0,
        username: "",
        email: "",
        token: "",
        roles: []
    });

    useEffect(() => {
        if (AuthService.getCurrentUser()) {
            SetLoggedInUser(AuthService.getCurrentUser())
        } else {
            navigate("/")
        }
    }, []);

    return (
        loggedInUser.roles.includes("USER") ?
        <UserMinaSidor />
        : loggedInUser.roles.includes("CLEANER") ?
        <CleanerSidor />
        : loggedInUser.roles.includes("ADMIN") ?
        <div className="IndragBild">
            <div className="IndragBildSidor">
                <img src={Sidor} alt="Bild Sidor" width="400" height="400"></img>
            </div>
            <div>
                <h3 className="Rubrik">Det är {loggedInUser.username} sidor</h3>
            </div>

        </div>
        : <></>
    )

}


export default MinaSidor;
