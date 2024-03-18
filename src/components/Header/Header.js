import React from "react";
import UserSwitch from "../UserSwitch/UserSwitch";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.header} >
            <UserSwitch/>
        </div>
    );
}

export default Header;