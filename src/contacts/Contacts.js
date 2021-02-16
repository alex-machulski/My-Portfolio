import React from "react";
import styles from "./Contacts.module.css";
import styleContainer from "../common/styles/Container.module.css";

function Contacts() {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}>Contacts</h2>
                <div className={"form"}>
                    <form action="">
                        <input type="text" placeholder={"Name"}/>
                        <input type="text" placeholder={"E-mail"}/>
                        <textarea name="" id="" cols="30" rows="10" placeholder={"Your message"}></textarea>
                    </form>
                </div>
                <button>Send</button>
            </div>
        </div>
    );
}

export default Contacts;