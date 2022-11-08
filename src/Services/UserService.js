import axios from "axios";
import authHeader from "./AuthHeader";

class AuthService {
    getPublicContent() {
        return axios.get(process.env.REACT_APP_BASE_URL + 'api/...');
    }

    getUser() {
        return axios.get(process.env.REACT_APP_BASE_URL + '/api/user', { headers: authHeader() });
    }

    getAdmin() {
        return axios.get(process.env.REACT_APP_BASE_URL + "/api/admin")
    }
}



export default new AuthService;