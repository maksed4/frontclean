import { useEffect, useState } from "react"
import AuthService from "../../Services/AuthService";
import CurrentCustomerSidor from "./CurrentCustomerSidor";

const UserMinaSidor = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [address, setAddress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [city, setCity] = useState("");

    const [loggedInCustomer, setLoggedInCustomer] = useState({
        firstname: "",
        lastname: "",
        address: "",
        zipcode: "",
        city: "",
        customerType: [""]
    });

    useEffect(() => {
        if (AuthService.getCurrentCustomer()) {
            setLoggedInCustomer(AuthService.getCurrentCustomer())
        }
    }, [])

    return(
        loggedInCustomer ?
            <CurrentCustomerSidor />
            :
            <div>
                <div>
                    <h1>Personlig information</h1>
                    <div>
                        <input type="text" placeholder="Förnamn" value={firstname}
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
                    </div>
                </div>
            </div>
    );
}

export default UserMinaSidor;
