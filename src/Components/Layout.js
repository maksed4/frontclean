import { Nav } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import Logo from "../images/Logo.png"
import "../styledComponents/Layout.css"


export function Layout() {
    return (
        <div>
            <header>
                <Nav>
                    <ul className="Nav">
                        <img src={Logo} alt="Logotype Städa Fint AB" width="150" height="100"></img>
                        <ul className="Link"><Link to="Hem">HEM</Link></ul>
                        <ul className="Link"><Link>BOKA STÄDNING</Link></ul>
                        <ul className="Link"><Link to="MinaSidor">MINA SIDOR</Link></ul>
                        <ul className="Link" ><Link to="register"> register </Link></ul>
                    </ul>
                </Nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </div>
    )
}