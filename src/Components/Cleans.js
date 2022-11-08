import { useEffect, useState } from "react"
import Clean from "./Clean";


const Cleans = () => {

    const [cleans, setCleans] = useState([{ id: 0, pris: "pris", datum: "datum", decription: "decription " }])

    useEffect = (() => {

        const fetchClean = async () => {

            let response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/clean`);
            let cleans = await response.json();

            setCleans(cleans)
        }

        fetchClean();

    }, [])




    return (
        <ReactFragment>
            {
                cleans.map(clean => <Clean key={clean.id} clean={clean} />)
            }

        </ReactFragment>
    )
}



export default Cleans;