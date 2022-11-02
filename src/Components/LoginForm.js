import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Register from "./Register";
import Logo from "../images/Logo.png"


const LoginForm = ({ Log, error }) => {



    const [email, Setemail] = useState("");
    const [password, SetPassword] = useState("");
    const [username, SetUsername] = useState("");


    let navigate = useNavigate();


    const submitHandler = e => {
        e.preventDefault();
    }


    const handleLogin = async (event) => {
        event.preventDefault();

        let response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/login`, {

            method: 'POST',
            body: JSON.stringify({

                username: username,
                password: password,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            navigate("Hem")
        )

        let token = await response.text();

        localStorage.setItem("token", token);
        console.log(token);
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
                            onChange={(e => SetUsername(e.target.value))} value={username}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            onChange={(e => Setemail(e.target.value))} value={email}></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="Password"
                            id="Password"
                            onChange={(e => SetPassword(e.target.value))} value={password} ></input>
                    </div>
                    <input onClick={handleLogin} type="submit" value="Login" />
                    <button onClick={() => { navigate("/Registration") }} className="btn"> Registrera mig</button>
                </div>

            </form>
        </div>
    )
}
export default LoginForm;




