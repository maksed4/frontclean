import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/AuthService";
import UserHem from "./sub/UserHem";

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
        <div>
            <p>
            THis is home page
            </p>
        </div>
    )
}
