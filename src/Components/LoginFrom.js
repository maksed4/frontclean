import { useState } from "react";

const LoginForm = ({ Log, error }) => {


    const [email, Setemail] = useState("");
    const [password, SetPassword] = useState("");
    const [username, SetUsername] = useState("");





    const submitHandler = e => {
        e.preventDefault();
    }


    const handleLogin = async (event) => {
        event.preventDefault();

        let response = await fetch(`http://localhost:8080/api/auth/login`, {

            method: 'POST',
            body: JSON.stringify({

                username: username,
                password: password,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let token = await response.text();
        localStorage.setItem("token", token);
        console.log(token);
    }



    return (
        <form onSubmit={submitHandler}>
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
                        type="text"
                        name="Password"
                        id="Password"
                        onChange={(e => SetPassword(e.target.value))} value={password} ></input>
                </div>
                <input onClick={handleLogin} type="submit" value="Login" />
            </div>

        </form>
    )
}
export default LoginForm;