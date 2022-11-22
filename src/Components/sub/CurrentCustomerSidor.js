import {useEffect, useState} from "react";
import AuthService from "../../Services/AuthService";
import axios from "axios";
import Avboka from "./Avboka";
import { Layout } from "../Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidor from "../../images/Sidor.png"
import IsApprove from "./IsApprove";


const CurrentCustomerSidor = () => {

    const [loggedInCustomer, setLoggedInCustomer] = useState({
        firstname: "",
        lastname: "",
        address: "",
        zipcode: "",
        city: "",
        customerType: [""]
    });
    const [loggedInUser, setLoggedInUser] = useState({
        id: 0,
        username: "",
        email: "",
        token: "",
        roles: []
    });


    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        if (AuthService.getCurrentCustomer()) {
            setLoggedInCustomer(AuthService.getCurrentCustomer());
            setLoggedInUser(AuthService.getCurrentUser);

            axios.get(`${process.env.REACT_APP_BASE_URL}/api/customer/${AuthService.getCurrentUser().id}/my-cleanings`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + AuthService.getCurrentUser().token
                }
            }).then(res => setBookings(res.data))
        }
    }, [])

    return (
        loggedInCustomer.customerType.includes("PRIVATE_CUSTOMER") ?
            <div className="IndragBild">
                <div className="IndragBildUser">
                    <img src={Sidor} alt="Bild Mina Sidor" width="400" height="400"></img>
                </div>
                <div>
                    <h3 className="Rubrik">PERSONLIG INFORMATION</h3>
                    <p className="Indrag">Förnamn: {loggedInCustomer.firstname}</p>
                    <p className="Indrag">Efternamn: {loggedInCustomer.lastname}</p>
                    <p className="Indrag">Email: {loggedInUser.email}</p>
                    <p className="Indrag">Adress: {loggedInCustomer.address}</p>
                    <p className="Indrag">Postkod: {loggedInCustomer.zipcode}</p>
                    <p className="Indrag">Stad: {loggedInCustomer.city}</p>

                    <div>
                        <FontAwesomeIcon icon={["fa-solid","fa-vacuum"]} />
                        <h3 className="Rubrik">MINA BOKNINGAR</h3>
                    </div>
                    {bookings.map(booking =>
                        <div key={booking.id}>
                            <p>Datum: {booking.cleaningDate.substring(0, 10)}</p>
                            <p>Tid: {booking.cleaningDate.substring(11, 16)}</p>
                            <p>Plats: {booking.location}</p>
                            <p>Typ: {
                                booking.cleaningType.includes("TOP_CLEANING") ? <span>Top</span> :
                                    booking.cleaningType.includes("DIAMOND_CLEANING") ? <span>Diamond</span> :
                                        booking.cleaningType.includes("WINDOW_CLEANING") ? <span>Fönster</span> :
                                            booking.cleaningType.includes("BASIC_CLEANING") ? <span>Basic</span> :
                                                <></>
                            }</p>
                            <p>Färdig: {booking.done ? <span> Ja {<IsApprove id={booking.id} />} </span> : <Avboka id={booking.id} />}</p>
                            <br/>
                        </div>
                    )}
                </div>
            </div>
            : loggedInCustomer.customerType.includes("COMPANY_CUSTOMER") ?
                <div>
                    <h1>Personlig information</h1>
                    <p>Företag: {loggedInCustomer.firstname}</p>
                    <p>Kontaktperson: {loggedInCustomer.lastname}</p>
                    <p>Email: {loggedInUser.email}</p>
                    <p>Adress: {loggedInCustomer.address}</p>
                    <p>Postkod: {loggedInCustomer.zipcode}</p>
                    <p>Stad: {loggedInCustomer.city}</p>

                    <h1>Mina bokningar</h1>
                    {bookings.map(booking =>
                        <div key={booking.id}>
                            <p>Datum: {booking.cleaningDate.substring(0, 10)}</p>
                            <p>Tid: {booking.cleaningDate.substring(11, 16)}</p>
                            <p>Plats: {booking.location}</p>
                            <p>Typ: {
                                booking.cleaningType.includes("TOP_CLEANING") ? <span>Top</span> :
                                    booking.cleaningType.includes("DIAMOND_CLEANING") ? <span>Diamond</span> :
                                        booking.cleaningType.includes("WINDOW_CLEANING") ? <span>Fönster</span> :
                                            booking.cleaningType.includes("BASIC_CLEANING") ? <span>Basic</span> :
                                                <></>
                            }</p>
                            <p>Färdig: {booking.done ? <span> Ja </span> : <Avboka id={booking.id} />}</p>
                            <br/>
                        </div>
                    )}
                </div>
            :
            <></>
    )
}

export default CurrentCustomerSidor;
