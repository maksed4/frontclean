import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import AuthService from "../Services/AuthService";

const UpdateCustomer = () => {

    const { id } = useParams();
    let navigate = useNavigate();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [address, setAddress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [city, setCity] = useState("");

    const [selected, setSelected] = useState("");
    const options = [
        {value: 'PRIVATE_CUSTOMER', text: 'Privatkund'},
        {value: 'COMPANY_CUSTOMER', text: 'Företagskund'}
    ];

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/customer/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AuthService.getCurrentUser().token
            }
        })
            .then(res => {
                setFirstname(res.data.firstname);
                setLastname(res.data.lastname);
                setAddress(res.data.address);
                setZipcode(res.data.zipcode);
                setCity(res.data.city);
                setSelected(res.data.customerType);
            })
    }, []);

    const handleSelect = (e) => {
        setSelected(e.target.value);
    }

    const handleClick = () => {
        fetch(process.env.REACT_APP_BASE_URL + "/api/customer", {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
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
            alert("Kund uppdaterad");
        })
    }

    return(
        <div className="Indrag">
            <h3>Updatera personlig information</h3>
            <div>
                <input type="text" value={firstname}
                       onChange={(e => setFirstname(e.target.value))}
                />
                <input type="text" placeholder="Efternamn" value={lastname}
                       onChange={(e => setLastname(e.target.value))}
                />
            </div>
            <div>
                <input type="text" placeholder="Adress" value={address}
                       onChange={(e => setAddress(e.target.value))}
                />
                <input type="text" placeholder="Postkod" value={zipcode}
                       onChange={(e => setZipcode(e.target.value))}
                />
            </div>
            <div>
                <input type="text" placeholder="Stad" value={city}
                       onChange={(e => setCity(e.target.value))}
                />
                <select value={selected} onChange={handleSelect}>
                    {options.map(option => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.text}
                        </option>
                    ))}
                </select>
            </div>
            <button className="BokaButton3" onClick={handleClick}>Uppdatera</button>
        </div>
    );
}

export default UpdateCustomer;
