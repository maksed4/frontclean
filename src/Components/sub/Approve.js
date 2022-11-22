const Approve = (props) => {

    return(
        <p>
            {props.approved ? <span>Godkänd</span> : <span>Ej godkänd</span>}
            <br/>
            <span>Feedback: {props.message}</span>
        </p>
    );
}

export default Approve;
