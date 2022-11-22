import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import AuthService from "../Services/AuthService";

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
        <div>
            <Link to={"/cleaner-signup"}><h1>Registrera städare</h1></Link>

            {cleaners
                .map(cleaner =>
                    <div key={cleaner.id}>
                        <p>ID: {cleaner.id}</p>
                        <p>{cleaner.firstname} {cleaner.lastname}</p>
                        <p>{cleaner.city}</p>
                        <br/>
                    </div>
                )}
        </div>
    );
}

export default Cleaners;
