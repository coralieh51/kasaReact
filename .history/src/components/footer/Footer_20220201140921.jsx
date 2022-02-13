import React from "react";
import footerImg from "../../assets/img/footer-logo-m.svg"

function Footer() {
    return(
        <footer className="footer">
            <img src={footerImg}></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;