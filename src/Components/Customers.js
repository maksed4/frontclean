import {useEffect, useState} from "react";
import axios from "axios";
import AuthService from "../Services/AuthService";
import {Link} from "react-router-dom";

const Customers = () => {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/customer/all`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AuthService.getCurrentUser().token
            }
        })
            .then(res => setCustomers(res.data))
    }, [])

    return (
        <div>
            <Link to={"/customer-signup"}><h1>Registrera ny kund</h1></Link>
            {customers.map(customer =>
                <div key={customer.id}>
                    <h3>{customer.firstname} {customer.lastname}</h3>
                    <p>Adress: {customer.address}</p>
                    <p>Postkod: {customer.zipcode}</p>
                    <p>Stad: {customer.city}</p>
                    {customer.customerType.includes("PRIVATE_CUSTOMER") ?
                        <p className="customerType">Privat | ID: {customer.id}</p> :
                        customer.customerType.includes("COMPANY_CUSTOMER") ?
                            <p className="customerType">Företag | ID: {customer.id}</p> :
                            <></>}
                    <button>Redigera</button>
                    <br/>
                    <br/>
                </div>
            )}
        </div>
    );
}

export default Customers;
