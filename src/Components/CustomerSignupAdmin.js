import {useState} from "react";
import AuthService from "../Services/AuthService";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CustomerSignupAdmin = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [address, setAddress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [city, setCity] = useState("");

    const [selected, setSelected] = useState("");
    const options = [
        {value: '', text: 'Välj typ av kund', disabled: true},
        {value: 'PRIVATE_CUSTOMER', text: 'Privatkund'},
        {value: 'COMPANY_CUSTOMER', text: 'Företagskund'}
    ];

    let navigate = useNavigate();

    const handleSelect = (e) => {
        setSelected(e.target.value);
    }

    const handleButton = async (e) => {
        if (firstname == '') alert("Skriv ett förnamn")
        else if (lastname == '') alert("Skriv ett efternamn")
        else if (address == '') alert("Skriv en adress")
        else if (zipcode == '') alert("Skriv en postkod")
        else if (city == '') alert("Skriv en stad")
        else if (selected == '') alert("Välj typ av kund")

        await fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/signup`, {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password,
                email: email,
                roles: ["USER"]
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
                fetch(process.env.REACT_APP_BASE_URL + "/api/auth/customer-signup", {
                    method: 'POST',
                    body: JSON.stringify({
                        id: respo.data.id,
                        firstname: firstname,
                        lastname: lastname,
                        address: address,
                        zipcode: zipcode,
                        city: city,
                        customerType: [selected]
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + AuthService.getCurrentUser().token
                    }
                }).then(() => {
                    navigate("/customers");
                    window.location.reload();
                });
            })
        });

    }

    return(
        <div>
            <h1>Personlig information</h1>
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
                <input type="text" placeholder="Adress" value={address}
                       onChange={(e => setAddress(e.target.value))}
                />
            </div>
            <div>
                <input type="text" placeholder="Postkod" value={zipcode}
                       onChange={(e => setZipcode(e.target.value))}
                />
                <input type="text" placeholder="Stad" value={city}
                       onChange={(e => setCity(e.target.value))}
                />
                <select value={selected} onChange={handleSelect}>
                    {options.map(option => (
                        <option
                            disabled={option.disabled}
                            key={option.value}
                            value={option.value}
                        >
                            {option.text}
                        </option>
                    ))}
                </select>
            </div>
            <br/>
            <button onClick={handleButton}>Registrera</button>
        </div>
    );
}

export default CustomerSignupAdmin;
