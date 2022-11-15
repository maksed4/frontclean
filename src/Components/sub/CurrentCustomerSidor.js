import {useEffect, useState} from "react";
import AuthService from "../../Services/AuthService";
import axios from "axios";
import Avboka from "./Avboka";

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
        loggedInCustomer.customerType.includes("PRIVATE_CUSTOMER") ?
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
