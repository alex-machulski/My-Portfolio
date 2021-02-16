import React from "react";
import styles from "./Project.module.css";

function Project(props) {
    return (
        <div className={styles.project}>
            <div
                className={styles.icon}><a href={props.projectLink}><img src={props.projectImage}/></a></div>
            <h3>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}

export default Project;
