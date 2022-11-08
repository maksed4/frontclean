import { useState } from "react";

const Clean = (props) => {

    const { clean } = props;

    const handleDelete = async (id) => {

        await fetch(`${process.env.REACT_APP_BASE_URL}/api/clean/${id}`, {
            method: "DELETE"
        })

        let response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/clean/`)
        let cleans = response.json();


    }

    return (
        <div>
            <h2>{clean.pris}</h2>
            <p>{clean.datum}</p>
            <p> {clean.decription}</p>
            <p>Avklarad
                <input
                    type="checkbox "
                    checked={clean.done}
                    onChange={() => console.log("avklarad")} />
            </p>

            <button onClick={() => handleDelete(id)} >Ta bort clean</button>
        </div>
    )

}


export default Clean;