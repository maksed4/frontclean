import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/Logo.png"
import AuthService from "../Services/AuthService";



const LoginForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loggedInUser, SetLoggedInUser] = useState(null);

    let navigate = useNavigate();

    useEffect(() => {
        if (AuthService.getCurrentUser()) {
            navigate("/hem")
        }
    }, []);

    const submitHandler = e => {
        e.preventDefault();

    }

    const handleLogin = async (event) => {
        event.preventDefault();

        AuthService.login(username, password)
        .then(() => {
                navigate("/Hem");
                window.location.reload();
            })
        .catch(error => alert(error));
    }


    return (
        <div className="App">
            <img src={Logo} alt="Logotype Städa Fint AB" width="200" height="150"></img>
            <form className="Form-background" onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2> Login </h2>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            name="Username"
                            id="Username"
                            onChange={(e => setUsername(e.target.value))} value={username}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="Password"
                            id="Password"
                            onChange={(e => setPassword(e.target.value))} value={password}></input>

                    </div>
                    <input onClick={handleLogin} type="submit" value="Login" />
                    <button onClick={() => { navigate("/Registration") }} className="btn"> Registrera mig</button>
                </div>

            </form>
        </div>
    )
}
export default LoginForm;




