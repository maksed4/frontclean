import {Component, useEffect, useState} from "react";
import axios from "axios";
import AuthService from "../../Services/AuthService";

const CleaningCustomer = (props) => {

    const [customer, setCustomer] = useState({
        firstname: "",
        lastname: "",
        address: "",
        zipcode: "",
        city: "",
        customerType: [""]
    });

    const css = `
    .customerType {
        font-size: 12px;
        margin-left: 10px;
    }
`

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/customer/${props.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AuthService.getCurrentUser().token
            }
        }).then(res => setCustomer(res.data))
    }, [])

    return (
        <span>
            <style>{css}</style>
            {customer.firstname} {customer.lastname}
                {customer.customerType.includes("PRIVATE_CUSTOMER") ?
                    <span className="customerType">Privat | ID: {props.id}</span> :
                customer.customerType.includes("COMPANY_CUSTOMER") ?
                    <span className="customerType">Företag | ID: {props.id}</span> :
                    <></>}
        </span>
    );
}

export default CleaningCustomer;
