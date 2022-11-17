import {useState} from "react";
import axios from "axios";
import AuthService from "../Services/AuthService";
import {useNavigate} from "react-router-dom";

const CleanerSignup = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [city, setCity] = useState("");

    let navigate = useNavigate();

    const handleButton = async () => {
        await fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/signup`, {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password,
                email: email,
                roles: ["CLEANER"]
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            axios
                .post(process.env.REACT_APP_BASE_URL + "/api/auth/login", {
                    username,
                    password
                }).then(respo => {
                fetch(`${process.env.REACT_APP_BASE_URL}/api/admin/cleaner-signup`, {
                    method: 'POST',
                    body: JSON.stringify({
                        id: respo.data.id,
                        firstname: firstname,
                        lastname: lastname,
                        city: city
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + AuthService.getCurrentUser().token
                    }
                }).then(() => {
                    navigate("/cleaners");
                    window.location.reload();
                });
            })
        });


    }

    return (
        <div>
            <div>
                <h1>Registrera städarens information</h1>
                <div>
                    <input type="text" placeholder="Användarnamn" value={username}
                           onChange={(e => setUsername(e.target.value))}
                    />
                    <input type="text" placeholder="Email" value={email}
                           onChange={(e => setEmail(e.target.value))}
                    />
                    <input type="password" placeholder="Lösenord" value={password}
                           onChange={(e => setPassword(e.target.value))}
                    />
                </div>
                <div>
                    <input type="text" placeholder="Förnamn" value={firstname}
                           onChange={(e => setFirstname(e.target.value))}
                    />
                    <input type="text" placeholder="Efternamn" value={lastname}
                           onChange={(e => setLastname(e.target.value))}
                    />
                    <input type="text" placeholder="Stad" value={city}
                           onChange={(e => setCity(e.target.value))}
                    />
                </div>
                <button onClick={handleButton}>Spara information</button>
            </div>
        </div>
    );
}

export default CleanerSignup;
