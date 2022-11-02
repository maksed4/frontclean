import { useState } from "react"
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

const MinaSidor = () => {

    let navigate = useNavigate();


    const [loggedInUser, SetLoggedInUser] = useState(null);


    return (
        <div>

            <div>
<<<<<<< HEAD
                <h1>Mina Sidor</h1>
=======
<<<<<<< HEAD
                <h1>Asalam alekym</h1>
=======
                <h1>Asalam alekym.</h1>
>>>>>>> IN-23-m-mina-sidor-for-stadare-m
>>>>>>> main
            </div>


        </div>
    )

}


export default MinaSidor;