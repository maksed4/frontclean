import axios from "axios";

class AuthService {
    async login(username, password) {
        const response = await axios
            .post(process.env.REACT_APP_BASE_URL + "api/auth/login", {
                username,
                password
            });
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    }

    logout() {
        localStorage.removeItem("user");
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
        return JSON.parse(localStorage.getItem('user'));;
    }


}




export default new AuthService();





