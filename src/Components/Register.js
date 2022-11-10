import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styledComponents/Register.css"

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


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
                email: email,
                roles: ["USER"]
            }),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(
            navigate("/")
        )

        console.log(response)


    }




    return (

        <section>
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
        </section>
    )
};

export default Register;