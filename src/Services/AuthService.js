import axios from "axios";

class AuthService {
    async login(username, password) {
        const response = await axios
            .post(process.env.REACT_APP_BASE_URL + "/api/auth/login", {
                username,
                password
            });
        if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }

        try {
            const customerResponse = await axios
                .get(`${process.env.REACT_APP_BASE_URL}/api/customer/${response.data.id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + response.data.token
                    }
                });
            if (customerResponse.data.id) {
                localStorage.setItem("customer", JSON.stringify(customerResponse.data));
            }
        } catch (e) {
            console.log(e)
        }

        return response.data;
    }

    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("customer");
    }

    register(username, email, password) {
        return axios
            .post(process.env.REACT_APP_BASE_URL + "api/auth/login", {
                username,
                email,
                password
            });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    getCurrentCustomer() {
        return JSON.parse(localStorage.getItem('customer'));
    }

}




export default new AuthService();





