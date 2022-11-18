import {useEffect, useState} from "react";
import AuthService from "../../Services/AuthService";
import axios from "axios";

const UserHem = () => {

    const [loggedInCustomer, setLoggedInCustomer] = useState({
        firstname: "",
        lastname: "",
        address: "",
        zipcode: "",
        city: "",
        customerTyp: [""]
    });

    useEffect(() => {
        if (AuthService.getCurrentCustomer()) {
            setLoggedInCustomer(AuthService.getCurrentCustomer())
        }
    }, [])

    return (
        <div>
            <h3 className="Rubrik">Hej {loggedInCustomer.firstname} {loggedInCustomer.lastname}!</h3>
        </div>
    )
}

export default UserHem;
