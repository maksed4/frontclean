import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/AuthService";
import UserHem from "./sub/UserHem";
import { Layout } from "./Layout";
import Hemma from "../images/Hemma.png"

export function Hem() {

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
        loggedInUser.roles.includes("USER") ? <UserHem /> :
        <div className="IndragBild">
            <div className="IndragBildHem">
                <img src={Hemma} alt="Bild Hem" width="400" height="400"></img>
            </div>
            <div>
                <br></br>
                <br></br>
                <br></br>
                <p className="IndragKontakt">Hjärtligt välkommen in till</p>
                <p className="IndragKontakt">oss på Städafint AB! 🖤</p>
            </div>
        </div>
    )
}
