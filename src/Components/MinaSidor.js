import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/AuthService";
import UserMinaSidor from "./sub/UserMinaSidor";

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
        <div>

            <div>

                <h1>Det är {loggedInUser.username} sidor</h1>

            </div>

        </div>
        : loggedInUser.roles.includes("ADMIN") ?
        <div>

            <div>

                <h1>Det är {loggedInUser.username} sidor</h1>

            </div>

        </div>
        : <></>
    )

}


export default MinaSidor;
