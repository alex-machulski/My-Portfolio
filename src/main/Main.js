import React from "react";
import styles from "./Main.module.css";
import styleContainer from "../common/styles/Container.module.css";

function Main() {
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.greeting}>
                    <span>Hi there.</span>
                    <h1>I am Alexander Machulski</h1>
                    <p>A Frontend Developer</p>
                </div>
                <div className={styles.mainPhoto}></div>
            </div>
        </div>
    );
}

export default Main;
