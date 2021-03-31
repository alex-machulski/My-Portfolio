import React from "react";
import styles from "./MyProjects.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import todoImage from '../assets/images/projects_img/to-do-list.png';
import socialImage from '../assets/images/projects_img/soc-network.jpg';

function MyProjects() {

    const socialStyle = {
        color: 'blue',
        backgroundImage: `url(${socialImage})`
    };

    const todoStyle = {
        color: 'blue',
        backgroundImage: `url(${todoImage})`
    };

    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <Title text={"My projects"}/>
                <div className={styles.projects}>
                    <Project
                        style={todoStyle}
                        title={"To-Do List"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing."}
                        //projectImage={"https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps-1400x1050.png"}
                        projectLink={"https://github.com/alex-machulski/To-Do-List"}
                    />
                    <Project
                        style={socialStyle}
                        title={"Social Network"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo laboriosam nobis perferendis quidem sequi. Aperiam at cum fugiat quidem recusandae."}
                        //projectImage={"https://res.cloudinary.com/cmscritic/image/upload/q_auto,f_auto/v1575487832/top-social-networking-sites_wmysmq.jpg"}
                        projectLink={"https://github.com/alex-machulski/Social-Network"}
                    />
                </div>
            </div>
        </div>
    );
}

export default MyProjects;
