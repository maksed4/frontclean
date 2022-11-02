import { useState } from "react"
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

const MinaSidor = () => {

    let navigate = useNavigate();


    const [loggedInUser, SetLoggedInUser] = useState(null);


    return (
        <div>

            <div>

                <h1></h1>

            </div>

        </div>
    )

}


export default MinaSidor;