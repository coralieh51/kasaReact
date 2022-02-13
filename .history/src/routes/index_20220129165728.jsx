import { Link } from "react-router-dom";
import title from "../"

function Header() {
    return (
        <nav>
            <Link to="/">{title}</Link>
        </nav>
    )
}

export default Header