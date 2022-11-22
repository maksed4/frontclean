import {useEffect, useState} from "react";
import axios from "axios";
import AuthService from "../../Services/AuthService";
import Approve from "./Approve";
import {Link} from "react-router-dom";

const IsApprove = (props) => {

    const [approved, setApproved] = useState({});
    const [noFeedback, setNoFeedback] = useState({});


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/feedback/${AuthService.getCurrentUser().id}/${props.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AuthService.getCurrentUser().token
            }
        })
            .then(res => setApproved(res.data))
            .catch(e => setNoFeedback(e.response.data))
    }, [])

    return (
        <div>
            {
                approved.id ? <Approve
                        approved={approved.approved}
                        id={approved.id}
                        message={approved.message}
                        cleanId={approved.cleaningId}
                    /> :
                    noFeedback ?
                        <Link to={`/approve/${props.id}`}>{noFeedback.message}</Link>
                        : <></>
            }
        </div>
    );
}

export default IsApprove;
