import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {


    let navigate = useNavigate();


    const submitHandler = e => {
        e.preventDefault();
    }

    const [email, Setemail] = useState("");
    const [password, SetPassword] = useState("");
    const [username, SetUsername] = useState("");

    const handleRegistration = async () => {

        let response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/signup`, {

            method: 'POST',
            body: JSON.stringify({

                username: username,
                password: password,
                email: email
            }),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(
            navigate("/MinaSidor")
        )

        console.log(response)


    }
    return (

        <div>
            <div className="App">
                <form onSubmit={submitHandler}>
                    <div className="form-inner">
                        <h2> Registration </h2>
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
                        <input type="submit" value="Registrera mig" onClick={() => {
                            //navigate("/MinaSidor")
                            handleRegistration()
                        }} />

                    </div>

                </form>
            </div>
        </div>
    )
};

export default Register;