import { Link } from "react-router-dom";
import title from "../components/header/banner"

function Header() {
    return (
        <nav>
            <Link to="/">Home</Link>
        </nav>
    )
}

export default Header