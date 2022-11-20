import {useEffect, useState} from "react";
import axios from "axios";
import AuthService from "../../Services/AuthService";
import Avboka from "./Avboka";

const CleanerSidor = () => {

    const [cleaner, setCleaner] = useState({
        id: 0,
        city: "",
        firstname: "",
        lastname: ""
    });

    const [cleanings, setCleanings] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/cleaner/${AuthService.getCurrentUser().id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AuthService.getCurrentUser().token
            }
        }).then(res => {
            setCleaner(res.data);
        });

        axios.get(`${process.env.REACT_APP_BASE_URL}/api/cleaner/${AuthService.getCurrentUser().id}/my-cleanings`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AuthService.getCurrentUser().token
            }
        }).then(res => {
            setCleanings(res.data);
        });
    }, []);

    return(
        <div>
            <h1>Personlig information</h1>
            <h2>Namn: {cleaner.firstname} {cleaner.lastname}</h2>
            <h3>Stad: {cleaner.city}</h3>
            <p>ID: {cleaner.id}</p>

            <h1>Mina städningar</h1>
            {cleanings.map(cleaning =>
                <div key={cleaning.id}>
                    <p>
                        Datum: {cleaning.cleaningDate.substring(0, 10)} | Tid: {cleaning.cleaningDate.substring(11, 16)}
                    </p>
                    <p>
                        Plats: {cleaning.location} |  <span>Typ: {
                        cleaning.cleaningType.includes("TOP_CLEANING") ? <span>Top</span> :
                            cleaning.cleaningType.includes("DIAMOND_CLEANING") ? <span>Diamond</span> :
                                cleaning.cleaningType.includes("WINDOW_CLEANING") ? <span>Fönster</span> :
                                    cleaning.cleaningType.includes("BASIC_CLEANING") ? <span>Basic</span> :
                                        <></>
                    }</span>
                    </p>

                    <p>Färdig: {cleaning.done ? <button> Ja </button> : <span>Nej</span> } | Städ ID: {cleaning.id}</p>
                    <br/>
                </div>
            )}
        </div>
    );
}

export default CleanerSidor;
