import { Outlet } from "react-router-dom"
import "../styledComponents/Layout.css"
import Nav from "./Nav"


export function Layout() {
    return (
        <div>
            <header>
                <Nav />
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </div>
    )
}