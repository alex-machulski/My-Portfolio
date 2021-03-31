import React from "react";
import styles from "./MySkills.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import reactSVG from "../assets/images/skills_img/react_skill.svg";
import tsPNG from "../assets/images/skills_img/typescript_skill.png";
import reduxSVG from "../assets/images/skills_img/redux_skill.svg";

function MySkills() {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Title text={"My Skills"}/>
                <div className={styles.skills}>
                    <Skill
                        title={"React"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing."}
                        logo={reactSVG}
                    />
                    <Skill
                        title={"Typescript"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo laboriosam nobis perferendis quidem sequi. Aperiam at cum fugiat quidem recusandae."}
                        logo={tsPNG}
                    />
                    <Skill
                        title={"Redux"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dicta harum ipsum, placeat sequi temporibus?"}
                        logo={reduxSVG}
                    />
                </div>
            </div>
        </div>
    );
}

export default MySkills;
