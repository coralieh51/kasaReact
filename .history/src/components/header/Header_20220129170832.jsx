import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
    return (
        <nav>
          <Logo/>
            <Link to="/">Home</Link>
        </nav>
    )
}

export default Header