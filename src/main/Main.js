import React from "react";
import styles from "./Main.module.scss";
import styleContainer from "../common/styles/Container.module.css";

function Main() {
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.greeting}>
                    <h3>Hi there.</h3>
                    <h1>I am Alexander Machulsky</h1>
                    <h3>A Frontend Developer</h3>
                </div>
                <div className={styles.mainPhoto}></div>
            </div>
        </div>
    );
}

export default Main;
