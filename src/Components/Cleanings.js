import {Component, useEffect, useState} from "react";
import axios from "axios";
import AuthService from "../Services/AuthService";
import Avboka from "./sub/Avboka";
import CleaningCustomer from "./sub/CleaningCustomer";
import CleaningCleaner from "./sub/CleaningCleaner";
import AdminAvboka from "./sub/AdminAvboka";

const Cleanings = () => {
    const [cleanings, setCleanings] = useState([]);
    const [clean, setClean] = useState({
        id: 0,
        date: "",
        length: 0,
        location: "",
        type: [],
        customer: 0,
        done: false
    })

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/cleaning/all`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AuthService.getCurrentUser().token
            }
        }).then(res => {
            setCleanings(res.data);
            console.log(cleanings);
        })
    }, [])

    return (
        <div>
            {cleanings
                .sort((a, b) => a.cleaningDate > b.cleaningDate ? 1 : -1)
                .sort((a, b) => a.done - b.done)
                .map(cleaning =>
                <div key={cleaning.id}>
                    <p>Städ ID: {cleaning.id}</p>
                    <h3>Kund: <span>{<CleaningCustomer id={cleaning.customerId} />}</span></h3>
                    <h3>Städare: <span>{<CleaningCleaner cleaningId={cleaning.id} />}</span></h3>
                    <p>Datum: {cleaning.cleaningDate.substring(0, 10)} <span>| Tid: {cleaning.cleaningDate.substring(11, 16)}</span></p>
                    <p>Plats: {cleaning.location}</p>
                    <p>Typ: {
                        cleaning.cleaningType.includes("TOP_CLEANING") ? <span>Top</span> :
                            cleaning.cleaningType.includes("DIAMOND_CLEANING") ? <span>Diamond</span> :
                                cleaning.cleaningType.includes("WINDOW_CLEANING") ? <span>Fönster</span> :
                                    cleaning.cleaningType.includes("BASIC_CLEANING") ? <span>Basic</span> :
                                        <></>
                    } <span>| Färdig: {cleaning.done ? <span> Ja </span> :
                        <AdminAvboka
                            cleaningId={cleaning.id} customerId={cleaning.customerId}
                    />}</span></p>
                    <br/>
                </div>
            )}
        </div>
    );
}

export default Cleanings;
