import React from "react";
import styles from "./MySkills.module.css";
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";

function MySkills() {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>My Skills</h2>
                <div className={styles.skills}>
                    <Skill
                        title={"React"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing."}
                    />
                    <Skill
                        title={"Typescript"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo laboriosam nobis perferendis quidem sequi. Aperiam at cum fugiat quidem recusandae."}
                    />
                    <Skill
                        title={"Redux"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dicta harum ipsum, placeat sequi temporibus?"}
                    />
                </div>
            </div>
        </div>
    );
}

export default MySkills;
