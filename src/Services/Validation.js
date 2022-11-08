const Validation = (username, password) => {


    let errors = {}

    if (!username.username) {
        errors.username = "Name Required"
    }
    else if (username.username.length < 5) {
        errors.username = "Username must be more than 5 char"
    }

    if (!password.password) {
        errors.password = "Password Required"
    }
    else if (password.password.length < 5) {
        errors.password = "Password must be more than 5 char"
    }

    return errors;

}


export default Validation;