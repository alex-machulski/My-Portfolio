import React from "react";
import styles from "./Skill.module.scss";


function Skill(props) {
    return (
        <div className={styles.skill}>
            <div className={styles.icon} style={{backgroundImage: `url(${props.logo})`}}>

            </div>
            <div className={styles.skillDescription}>
                <h3>{props.title}</h3>
                <span>{props.description}</span>
            </div>
        </div>
    );
}

export default Skill;
