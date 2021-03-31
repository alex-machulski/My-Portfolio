import React from "react";
import styles from "./Contacts.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";

function Contacts() {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title text={"Contact"}/>
                <div className={styles.contactForm}>
                    <form action="">
                        <input type="text" placeholder={"Name"}/>
                        <input type="text" placeholder={"E-mail"}/>
                        <textarea name="" id="" cols="30" rows="10" placeholder={"Your message"}/>
                        <button type={"submit"} className={styles.submitBtn}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts;