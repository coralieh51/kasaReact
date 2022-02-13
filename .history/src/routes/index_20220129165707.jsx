import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <Link to="/">{title}</Link>
        </nav>
    )
}

export default Header