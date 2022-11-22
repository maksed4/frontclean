import {useEffect, useState} from "react";
import axios from "axios";
import AuthService from "../../Services/AuthService";
import Avboka from "./Avboka";
import Sidor from "../../images/Sidor.png"

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

    const handleClick = (cleanId, bool) => {
        let isCompleted = bool ? " slutförd" : " icke slutförd";

        fetch(process.env.REACT_APP_BASE_URL + "/api/cleaner/completed", {
            method: 'PUT',
            body: JSON.stringify({
                cleaningId: cleanId,
                cleanerId: AuthService.getCurrentUser().id,
                isCompleted: bool
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AuthService.getCurrentUser().token
            }
        })
            .then(() => {
                window.location.reload();
                alert("Städning med id: " + cleanId + isCompleted)
            })
    }

    return(
        <div className="IndragBild">
            <div className="IndragBildMina">
                <img src={Sidor} alt="Bild Mina Sidor" width="400" height="400"></img>
            </div>
            <div>
                <h3 className="Rubrik">🖤 Personlig information</h3>
                <h3 className="Indrag">Namn: {cleaner.firstname} {cleaner.lastname}</h3>
                <h3 className="Indrag">Stad: {cleaner.city}</h3>
                <p className="Indrag">ID: {cleaner.id}</p>

                <h3 className="Rubrik">⭐️ Mina städningar</h3>
                {cleanings
                    .sort((a, b) => a.cleaningDate > b.cleaningDate ? 1 : -1)
                    .sort((a, b) => a.done - b.done)
                    .map(cleaning =>
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

                        <p>
                            Färdig:
                            {
                            cleaning.done ?
                            <button onClick={() => handleClick(cleaning.id, false)}> Ja </button> :
                            <button onClick={() => handleClick(cleaning.id, true)}>Nej</button>
                            }
                            | Städ ID: {cleaning.id}
                        </p>
                        <br/>
                    </div>
                )}
            </div>    
        </div>
    );
}

export default CleanerSidor;
