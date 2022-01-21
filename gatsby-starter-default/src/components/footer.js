import React from "react";

//import * as styles from "./footer.module.css";

const Footer = ({ siteTitle }) => {
    return (
        <>
            <footer >
                <p>© {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.com">Gatsby</a> {siteTitle}</p>
                <p>© CodePage 65001 UTF-8</p>
            </footer>
        </>
    )
};

export default Footer;
