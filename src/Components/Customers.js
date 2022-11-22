import {useEffect, useState} from "react";
import axios from "axios";
import AuthService from "../Services/AuthService";
import {Link} from "react-router-dom";
import Kunder from "../images/Kunder.png"

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
        <div className="IndragBild">
            <div className="IndragBildKunder">
                <img src={Kunder} alt="Bild Kunder" width="400" height="350"></img>
            </div>
            <div>
                <Link to={"/customer-signup"}><h3 className="Rubrik">REGISTRERA NY KUND</h3></Link>
                {customers.map(customer =>
                    <div key={customer.id}>
                        <h3 className="IndragKontakt">{customer.firstname} {customer.lastname}</h3>
                        <p className="IndragKontakt">Adress: {customer.address}</p>
                        <p className="IndragKontakt">Postkod: {customer.zipcode}</p>
                        <p className="IndragKontakt">Stad: {customer.city}</p>
                        {customer.customerType.includes("PRIVATE_CUSTOMER") ?
                            <p className="IndragKontakt">Privat | ID: {customer.id}</p> :
                            customer.customerType.includes("COMPANY_CUSTOMER") ?
                                <p className="customerType">Företag | ID: {customer.id}</p> :
                                <></>}
                        <Link className="BokaButton2" to={`/update/${customer.id}`}>Redigera</Link>
                        <br/>
                        <br/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Customers;
