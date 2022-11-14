import {useEffect, useState} from "react";
import AuthService from "../../Services/AuthService";
import axios from "axios";

const CurrentCustomerSidor = () => {

    const [loggedInCustomer, setLoggedInCustomer] = useState({
        firstname: "",
        lastname: "",
        address: "",
        zipcode: "",
        city: "",
        customerType: [""]
    });

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        if (AuthService.getCurrentCustomer()) {
            setLoggedInCustomer(AuthService.getCurrentCustomer());

            axios.get(`${process.env.REACT_APP_BASE_URL}/api/customer/${AuthService.getCurrentUser().id}/my-cleanings`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + AuthService.getCurrentUser().token
                }
            }).then(res => setBookings(res.data))
        }
    }, [])

    return (
        <div>
            <h1>Personlig information</h1>
            <p>Förnamn: {loggedInCustomer.firstname}</p>
            <p>Efternamn: {loggedInCustomer.lastname}</p>
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
                        booking.cleaningType.includes("TOP_CLEANING") ? <span>Top Cleaning</span> :
                        booking.cleaningType.includes("DIAMOND_CLEANING") ? <span>Diamond Cleaning</span> :
                        booking.cleaningType.includes("WINDOW_CLEANING") ? <span>Window Cleaning</span> :
                        booking.cleaningType.includes("BASIC_CLEANING") ? <span>Basic Cleaning</span> :
                                <></>
                    }</p>
                    <p>Färdig: {booking.done ? <span> Ja </span> : <span> Nej </span>}</p>
                    <br/>
                </div>
            )}
        </div>
    )
}

export default CurrentCustomerSidor;
