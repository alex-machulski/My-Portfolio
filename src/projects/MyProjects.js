import React from "react";
import styles from "./MyProjects.module.css";
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";

function MyProjects() {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <h2 className={styles.title}>My Projects</h2>
                <div className={styles.projects}>
                    <Project
                        title={"To-Do List"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing."}
                        projectImage={"https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps-1400x1050.png"}
                        projectLink={"https://github.com/alex-machulski/To-Do-List"}
                    />
                    <Project
                        title={"Social Network"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo laboriosam nobis perferendis quidem sequi. Aperiam at cum fugiat quidem recusandae."}
                        projectImage={"https://res.cloudinary.com/cmscritic/image/upload/q_auto,f_auto/v1575487832/top-social-networking-sites_wmysmq.jpg"}
                        projectLink={"https://github.com/alex-machulski/Social-Network"}
                    />
                </div>
            </div>
        </div>
    );
}

export default MyProjects;
