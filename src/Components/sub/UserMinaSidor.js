import { useEffect, useState } from "react"

const UserMinaSidor = () => {

    const [loggedInCustomer, setLoggedInCustomer] = useState({
        firstname: "",
        lastname: "",
        adress: "",
        zipcode: "",
        city: ""
    });

    return(
        <div>
            <div>
                <h1>Personlig information</h1>
                <div>
                    <input type="text" placeholder="Förnamn" value={loggedInCustomer.firstname} />
                    <input type="text" placeholder="Efternamn" value={loggedInCustomer.lastname} />
                </div>
                <div>
                    <input type="text" placeholder="Adress" value={loggedInCustomer.adress} />
                    <input type="text" placeholder="Postkod" value={loggedInCustomer.zipcode} />
                </div>
                <div>
                    <input type="text" placeholder="Stad" value={loggedInCustomer.city} />
                </div>
            </div>
            <div>
                <h1>Mina bokningar</h1>
            </div>
        </div>
    );
}

export default UserMinaSidor;