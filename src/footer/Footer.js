import React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.footer}>
            <h2 className={styles.title}>Alexander Machulski</h2>
            <div className={styles.links}>
                <div className={styles.linkElement}></div>
                <div className={styles.linkElement}></div>
                <div className={styles.linkElement}></div>
                <div className={styles.linkElement}></div>
            </div>
            <h4>&#169; 2021 All rights reserved</h4>
        </div>
    );
}

export default Footer;