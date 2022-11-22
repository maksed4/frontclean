import {useEffect, useState} from "react";
import AuthService from "../../Services/AuthService";
import axios from "axios";
import { Layout } from "../Layout";
import Hemma from "../../images/Hemma.png"

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
                <img src={Hemma} alt="Bild Hem" width="400" height="400"></img>
             </div>
            <div>
                <h3 className="Rubrik">Hej {loggedInCustomer.firstname} {loggedInCustomer.lastname}!</h3>
                <br></br>
                <p className="IndragKontakt">Hjärtligt välkommen in till</p>
                <p className="IndragKontakt">oss på Städafint AB! 🖤</p>
            </div>
        </div>
    )
}

export default UserHem;
