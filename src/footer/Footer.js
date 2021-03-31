import React from "react";
import styles from "./Footer.module.scss";
import Title from "../common/components/title/Title";
import linkedinPNG from "../assets/images/contacts_img/linkedin_cont.png";
import githubPNG from "../assets/images/contacts_img/github_cont.png";
import codewarsPNG from "../assets/images/contacts_img/codewars_cont.png";
import gmailPNG from "../assets/images/contacts_img/gmail_cont.png";

function Footer() {
    return (
        <div className={styles.footer}>
            <Title text={"Alexander Machulsky"}/>
            <div className={styles.links}>
                <div className={styles.linkElement} style={{backgroundImage: `url(${linkedinPNG})`}}></div>
                <div className={styles.linkElement} style={{backgroundImage: `url(${githubPNG})`}}></div>
                <div className={styles.linkElement} style={{backgroundImage: `url(${codewarsPNG})`}}></div>
                <div className={styles.linkElement} style={{backgroundImage: `url(${gmailPNG})`}}></div>
            </div>
            <h4>&#169; 2021 All rights reserved</h4>
        </div>
    );
}

export default Footer;