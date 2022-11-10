import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/AuthService";

export function Hem() {

    let navigate = useNavigate();


    const [loggedInUser, SetLoggedInUser] = useState(null);

    useEffect(() => {
        if (AuthService.getCurrentUser()) {
            SetLoggedInUser(AuthService.getCurrentUser())
        } else {
            navigate("/login")
        }
    }, []);

    return (
        <div>
            <p>
            THis is home page
            </p>
        </div>
    )
}