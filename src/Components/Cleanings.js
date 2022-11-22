import {Component, useEffect, useState} from "react";
import axios from "axios";
import AuthService from "../Services/AuthService";
import Avboka from "./sub/Avboka";
import CleaningCustomer from "./sub/CleaningCustomer";
import CleaningCleaner from "./sub/CleaningCleaner";
import AdminAvboka from "./sub/AdminAvboka";
import {Link} from "react-router-dom";
import { Layout } from "./Layout";
import BokaStadningar from "../images/BokaStadningar.png"

const Cleanings = () => {
    const [cleanings, setCleanings] = useState([]);

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
        <div className="IndragBild">
            <div className="IndragBildAdmin">
                <img src={BokaStadningar} alt="Bild Boka Städningar" width="380" height="400"></img>
            </div>
            <div>
            <Link to="/admin-boka"><br/><br/><br/></Link>
            {cleanings
                .sort((a, b) => a.cleaningDate > b.cleaningDate ? 1 : -1)
                .sort((a, b) => a.done - b.done)
                .map(cleaning =>
                <div key={cleaning.id}>
                    <p className="IndragKontakt">🖤 Städ ID: {cleaning.id}</p>
                    <h3 className="IndragKontakt">Kund: <span>{<CleaningCustomer id={cleaning.customerId} />}</span></h3>
                    <h3 className="IndragKontakt">Städare: <span>{<CleaningCleaner cleaningId={cleaning.id} />}</span></h3>
                    <p className="IndragKontakt">Datum: {cleaning.cleaningDate.substring(0, 10)} <span>| Tid: {cleaning.cleaningDate.substring(11, 16)}</span></p>
                    <p className="IndragKontakt">Plats: {cleaning.location}</p>
                    <p className="BokaButtonBigBox">Typ: {
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
                    <br/>
                </div>
            )}
            </div>
        </div>
    );
}

export default Cleanings;
