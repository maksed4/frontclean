import {useEffect, useState} from "react";
import axios from "axios";
import AuthService from "../Services/AuthService";

const Boka = () => {

    const [loggedInUser, SetLoggedInUser] = useState({
        id: 0,
        username: "",
        token: "",
        roles: []
    });
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [selected, setSelected] = useState("");

    const options = [
        {value: '', text: 'Välj en typ av städning', disabled: true},
        {value: 'DIAMOND_CLEANING', text: 'Diamond'},
        {value: 'TOP_CLEANING', text: 'Top'},
        {value: 'BASIC_CLEANING', text: 'Basic'},
        {value: 'WINDOW_CLEANING', text: 'Window'}
    ];

    useEffect(() => {
        SetLoggedInUser(AuthService.getCurrentUser);
    }, [])

    const handleDate = (e) => {
        setDate(e.target.value);
    }

    const handleTime = (e) => {
        setTime(e.target.value);
    }

    const handleSelect = (e) => {
        setSelected(e.target.value);
    }

    const handleButton = async (e) => {
        e.preventDefault();
        if (date == '') alert("Välj ett datum")
        else if (time == '') alert("Välj en tid")
        else if (selected == '') alert("Välj en städning")

        const response = await fetch(process.env.REACT_APP_BASE_URL + "/api/cleaning/book", {
            method: 'POST',
            body: JSON.stringify({
                customerId: loggedInUser.id,
                cleaningDate: date + "T" + time + ":00Z",
                cleaningType: [selected]
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + loggedInUser.token
            }
        })
        console.log(response);

    }


    return (
        <div>
            <h1>Boka städning</h1>
            <form>
                <input type="date" onChange={e => handleDate(e)}/>
                <input type="time" onChange={e => handleTime(e)}/>
                <select value={selected} onChange={handleSelect}>
                    {options.map(option => (
                        <option
                            disabled={option.disabled}
                            key={option.value}
                            value={option.value}
                        >
                            {option.text}
                        </option>
                    ))}
                </select>
                <button onClick={handleButton}>Boka</button>
            </form>
        </div>
    );
}

export default Boka;
