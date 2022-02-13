import { Link } from "react-router-dom";
import Lo

function Header() {
    return (
        <nav>
          <Logo/>
            <Link to="/">Home</Link>
        </nav>
    )
}

export default Header