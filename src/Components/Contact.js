import { Layout } from "./Layout";
import Kontakt from "../images/Kontakt.png"

const Contact = () => {

    return (
        <div className="IndragBild">
            <div className="IndragBildUser">
                <img src={Kontakt} alt="Bild Kontakt" width="400" height="400"></img>
            </div>
            <div>
                <h3 className="Rubrik" >Städafint AB</h3>
                <p className="IndragKontakt">Adress: Medborgarplatsen 27 </p>
                <p className="IndragKontakt">Stad: Stockholm</p>
                <p className="IndragKontakt">Telefon: 08-800 800</p>
                <p className="IndragKontakt">E-mail: info@stadafint.se</p>
                <br></br>
                <h4 className="IndragKontakt">Följ oss gärna på: </h4>
                <p className="IndragKontakt">FB och Instagram 🖤 </p>
                <p></p>
            </div>
        </div>
    );
}

export default Contact;