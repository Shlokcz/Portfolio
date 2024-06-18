import styles from "./Certifications.module.css"
import { forwardRef } from 'react';

const certi = [
    {
        id: 1,
        src: "/images/fullstack_certificate.png",
        title: "FullStack Web Development",
        desc: "Introduction to fundamentals and Oops Concepts",
        link: "https://drive.google.com/file/d/1nhfMfSR8Dx-5TjYgniiK8wlxI2SmJxGt/view"
    },
    {
        id: 2,
        src: "/images/java_certificate.png",
        title: "Oops Java",
        desc: "Introduction to fundamentals and Oops Concepts",
        link: "https://drive.google.com/file/d/1He_tvhVky9sXrO4-x_WTT7wj_bj8w4FE/view"
    },
    {
        id: 3,
        src: "/images/salesforce_certificate.png",
        title: "Introduction to Salesforce",
        desc: "Introduction to Salesforce Admin and Developer",
        link: "https://drive.google.com/file/d/1BC1xgAv256LQykhUadAZJIMg4-z17I2q/view"
    },
    {
        id: 4,
        src: "/images/CRM.png",
        title: "CRM Management",
        desc: "Deep understanding of CRM Concepts and Salesforce",
        link: "https://drive.google.com/file/d/1yjKM8d_luQ163ZsA-rx-Vu1Bmo2kvFy0/view"
    },
    {
        id: 5,
        src: "/images/javascript.png",
        title: "Javascript",
        desc: "Deep understanding of CRM Concepts and Salesforce",
        link: "https://drive.google.com/file/d/1Q7CIAHm-xdPdyplX5ddmm_ui9vePM0d0/view"
    }
];

const Certifications = forwardRef((props, ref) =>  {
    return (
        <section className={styles.certi} ref={ref}>
            <h1>Certifications</h1>
            <div className={styles.certiContainer} >
                {certi.map(item => (
                    <div key={item.id} className={styles.box1}>
                        <a href={item.link} target="_blank" rel="noreferrer"><img src={item.src} alt="certificate" /></a>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
});

export default Certifications;