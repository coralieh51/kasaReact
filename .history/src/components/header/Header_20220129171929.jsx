import { Link } from "react-router-dom";
import Kasalogo from "./Kasalogo";

function Header() {
    return (
        <nav>
          <Kasalogo/>
            <Link to="/">Home</Link>
        </nav>
    )
}

export default Header