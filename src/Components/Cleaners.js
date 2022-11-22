import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import AuthService from "../Services/AuthService";
import Stadare from "../images/Stadare.png"

const Cleaners = () => {

    const [cleaners, setCleaners] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/admin/cleaner/all`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AuthService.getCurrentUser().token
            }
        })
            .then(res => setCleaners(res.data))
    }, [])

    return (
        <div className="IndragBild">
            <div className="IndragBildStadare">
                <img src={Stadare} alt="Bild Städare" width="400" height="350"></img>
            </div>
            <div>
            <Link to={"/cleaner-signup"}><h3 className="Rubrik">REGISTRERA STÄDARE</h3></Link>

            {cleaners
                .map(cleaner =>
                    <div key={cleaner.id}>
                        <p className="IndragKontakt">ID: {cleaner.id}</p>
                        <p className="IndragKontakt">{cleaner.firstname} {cleaner.lastname}</p>
                        <p className="IndragKontakt">{cleaner.city}</p>
                        <br/>
                    </div>
                )}
            </div>    
        </div>
    );
}

export default Cleaners;
