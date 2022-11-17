import {useEffect, useState} from "react";
import axios from "axios";
import AuthService from "../../Services/AuthService";
import AssignedCleaner from "./AssignedCleaner";
import {Link} from "react-router-dom";

const CleaningCleaner = (props) => {

    const [cleaner, setCleaner] = useState({
        cleanerId: 0
    });
    const [noCleaner, setNoCleaner] = useState({});

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/cleaning/assigned-cleaners/${props.cleaningId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AuthService.getCurrentUser().token
            }
        })
            .then(res => setCleaner(res.data))
            .catch(e => setNoCleaner(e.response.data))
    }, [])

    return (
        <span>
            {cleaner.cleanerId ? <AssignedCleaner id={cleaner.cleanerId}/>
                : noCleaner ? <Link to={`/assign/${props.cleaningId}`}>{noCleaner.message}</Link>
                    : <></>}
        </span>
    );
}

export default CleaningCleaner;
