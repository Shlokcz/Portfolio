// import React from "./react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

function Navigation({ onScrollToSection, onScrollToSection2 }) {

    const text = "Hi, I am Shlok Gupta";

    return (
    <nav className={styles.navigation}>
        <div>
            <img className={styles.ham_img} src="/images/bones.png" alt="hamburger icon" />
        </div>

        <h3 className={styles.typewriter}>{text}</h3>

        <ul>
            <li className={styles.contactme}><Link to="/contact" className={styles.link}>Contact Me</Link></li>
            <li className={styles.certi} onClick={onScrollToSection}>Certificates</li>
            <li className={styles.project} onClick={onScrollToSection2}>Projects</li>
        </ul>
    </nav>
    );
}

export default Navigation;