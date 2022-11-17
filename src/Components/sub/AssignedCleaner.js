import {useEffect, useState} from "react";
import axios from "axios";
import AuthService from "../../Services/AuthService";

const AssignedCleaner = (props) => {

    const [cleaner, setCleaner] = useState({});

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/admin/cleaner/${props.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AuthService.getCurrentUser().token
            }
        })
            .then(res => setCleaner(res.data))
    }, [])

    return (
        <span>{cleaner.firstname} {cleaner.lastname}</span>
    );
}

export default AssignedCleaner;
