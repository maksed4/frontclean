import { useState } from "react";

const LoginForm = ({ Log, error }) => {

    const [details, Setdetails] = useState({ username: "", email: "", password: "" })

    const submitHandler = e => {
        e.preventDefault();

        Log(details);
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
                        onChange={e => Setdetails({ ...details, username: e.target.value })} value={details.username}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={e => Setdetails({ ...details, email: e.target.value })} value={details.email}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="text"
                        name="Password"
                        id="Password"
                        onChange={e => Setdetails({ ...details, password: e.target.value })} value={details.password} ></input>
                </div>
                <button> Login</button>
                <input type="submit" value="Login" />
            </div>

        </form>
    )
}
export default LoginForm;