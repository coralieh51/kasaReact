import { Link } from "react-router-dom";
import Kasalogo from "./Kasalogo";

function Header() {
    return (
        <nav>
          <Kasalogo/>
            <Link to="/">A</Link>
        </nav>
    )
}

export default Header