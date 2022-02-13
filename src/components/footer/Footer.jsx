import React from "react";
import footerImg from "../../assets/img/footer-logo-m.svg"

function Footer() {
    return(
        <footer>
            <img src={footerImg} alt="logo kasa"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;