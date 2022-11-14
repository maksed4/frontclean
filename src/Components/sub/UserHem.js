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
            <h1>Hej {loggedInCustomer.firstname} {loggedInCustomer.lastname}</h1>
        </div>
    )
}

export default UserHem;
