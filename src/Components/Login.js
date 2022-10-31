import { useState, button } from "react";
import LoginForm from "./LoginFrom";



const Login = () => {

    const adminUser = {
        email: "admin@admin.com",
        password: "admin1234"
    }

    const [user, Setuser] = useState({ username: "", email: "" });
    const [error, Seterror] = useState("")



    const Log = details => {
        console.log(details)

        if (details.email == adminUser.email && details.password == adminUser.password) {
            console.log("Logged in")
            Setuser({
                name: details.username,
                email: details.email
            });
        } else {
            console.log("do not match")
            Seterror("do not match")
        }
    }

    const Logout = () => {
        Setuser({ username: "", email: "" })
    }

    return (
        <div className="App">

            {(user.email != "") ?
                (
                    <div className="Welcome">
                        <h2>Welcome, <span>{user.name}</span></h2>
                        <button onClick={Logout}>Logout</button>
                    </div>
                ) :
                (
                    <LoginForm Log={Log} error={error} />
                )}
        </div>
    )

}


export default Login;