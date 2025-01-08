import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import './navbar.css'

function Navbar() {
    return (
        <nav>
        <ul className="navbar">
            <li className="navbar-item">
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                    Home
                </NavLink>
            </li>

            <li className="navbar-item">
                <NavLink to="/featured-items" className={({ isActive }) => (isActive ? "active" : "")}>
                    Featured Items
                </NavLink>
            </li>

            <li className="navbar-item">
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                    About
                </NavLink>
            </li>
        </ul>
        </nav>
    )
}

export default Navbar