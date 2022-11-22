import {useEffect, useState} from "react";
import AuthService from "../../Services/AuthService";
import axios from "axios";
import { Layout } from "../Layout";
import Hem from "../../images/Hem.png"

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
        <div className="IndragBild">
            <div className="IndragBildHem">
                <img src={Hem} alt="Bild Hem" width="400" height="400"></img>
             </div>
            <div>
                <h3 className="Rubrik">Hej {loggedInCustomer.firstname} {loggedInCustomer.lastname}!</h3>
            </div>
        </div>
    )
}

export default UserHem;
