import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/AuthService";

const MinaSidor = () => {

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

            <div>

                <h1>Det är mina sidor</h1>

            </div>

        </div>
    )

}


export default MinaSidor;