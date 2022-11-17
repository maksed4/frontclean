import { useEffect, useState } from "react"
import AuthService from "../../Services/AuthService";
import CurrentCustomerSidor from "./CurrentCustomerSidor";
import RegisterCustomer from "./RegisterCustomer";

const UserMinaSidor = () => {

    const [loggedInCustomer, setLoggedInCustomer] = useState({
        firstname: "",
        lastname: "",
        address: "",
        zipcode: "",
        city: "",
        customerType: [""]
    });

    useEffect(() => {
        if (AuthService.getCurrentCustomer()) {
            setLoggedInCustomer(AuthService.getCurrentCustomer())
        }
    }, [])

    return(
        loggedInCustomer.firstname ?
            <CurrentCustomerSidor />
            :
            <RegisterCustomer />
    );
}

export default UserMinaSidor;
