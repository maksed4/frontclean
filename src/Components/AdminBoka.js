import {useEffect, useState} from "react";
import axios from "axios";
import AuthService from "../Services/AuthService";
import {useNavigate} from "react-router-dom";

const Boka = () => {

    const [customerId, setCustomerId] = useState(0);
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

    let navigate = useNavigate();

    const handleCustomerId = (e) => {
        setCustomerId(e.target.value);
    }

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
                customerId: customerId,
                cleaningDate: date + "T" + time + ":00Z",
                cleaningType: [selected]
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AuthService.getCurrentUser().token
            }
        })
            .then(() => {
                navigate("/cleanings");
                window.location.reload();
                alert("Städning bokad")
            })
        console.log(response);

    }


    return (
        <div>
            <h1>Boka städning</h1>
            <form>
                <input number="customerId" onChange={e => handleCustomerId(e)}/>
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
