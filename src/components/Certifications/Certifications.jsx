import styles from "./Certifications.module.css"
import { forwardRef } from 'react';



const Certifications = forwardRef((props, ref) =>  {
    return (
        <section className={styles.certi} ref={ref}>
            <h1>Certifications</h1>
            <div className={styles.certiContainer} >
                <div className={styles.box1}>
                    <img src="/images/java_certificate.png" alt="" />
                    <h2>Java Certificate</h2>
                    <p>Introduction to fundamentals and Oops Concepts</p>
                </div>
                <div className={styles.box1}>
                    <img src="/images/salesforce_certificate.png" alt="" />
                    <h2>Salesforce Certificate</h2>
                    <p>Introduction to Salesforce Admin and Developer</p>
                </div>
                <div className={styles.box1}>
                    <img src="/images/CRM.png" alt="" />
                    <h2>CRM Certificate</h2>
                    <p>Deep understanding of CRM Concepts and Salesforce</p>
                </div>
            </div>
        </section>
    );
});

export default Certifications;