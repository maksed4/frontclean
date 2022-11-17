import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import AuthService from "../Services/AuthService";

const Assign = () => {

    const [cleaners, setCleaners] = useState([]);

    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/admin/cleaner/all`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AuthService.getCurrentUser().token
            }
        })
            .then(res => setCleaners(res.data))
    }, [])

    const handleClick = (cleanId) => {
        fetch(`${process.env.REACT_APP_BASE_URL}/api/cleaning/assign`, {
            method: 'PUT',
            body: JSON.stringify({
                cleaningId: id,
                cleanerId: cleanId
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AuthService.getCurrentUser().token
            }
        }).then(res => {
            console.log(res);
            navigate("/cleanings");
            window.location.reload();
        })

        ;
    }

    return(
        <div>
            {
                cleaners.map(cleaner =>
                <div key={cleaner.id}>
                    <p>{cleaner.firstname} {cleaner.lastname}</p>
                    <p>{cleaner.city}</p>
                    <button onClick={() => handleClick(cleaner.id)}>Tilldela städare</button>
                    <br/>
                    <br/>
                </div>
                )
            }
        </div>
    );
}

export default Assign;
