import styles from "./Projects.module.css"
import { useState, forwardRef } from "react";

const Projects = forwardRef((props, ref) =>  {

    const [currentIndex, setCurrentIndex] = useState(0);
    const projects = [
        {
            src:"/images/portfolio.png",
            title: 'Portfolio Website',
            description: 'This is my Portfolio Website.'
        },
        {
            src:"/images/Nike_page.png",
            title: 'Nike Custom Page',
            description: 'A custom made Nike Frontend Page with all the functionalities.'
        },
        {
            src:"/images/contact_page.png",
            title: 'Contact Page',
            description: 'Attach this responsive Contact Page in any of your websites'
        },
        {
            src:"/images/muzify.png",
            title: 'Muzify Music Listener',
            description: 'This is a single page application where you can store your music and listen to it whenever you want.'
        },
        {
            src:"/images/simon_game.png",
            title: 'Simon Game',
            description: 'Its a simple game where you can challenge your muscle memory and try to remember the patterns.'
        },
        {
            src:"/images/drum_kit.png",
            title: 'Drum Kit',
            description: 'Take out your hidden Musician and go crazy with all the Instruments'
        },
        {
            src:"/images/Random_dice_game.png",
            title: 'Random Dice Game',
            description: 'Refresh to test your Fate through this Dice Game. If your Dice comes larger you win ptherwise you loose.'
        }
    ];

    const moveSlide = (direction) => {
        let newIndex = currentIndex + direction;
        if (newIndex < 0) {
            newIndex = projects.length - 1;
        } else if (newIndex >= projects.length) {
            newIndex = 0;
        }
        setCurrentIndex(newIndex);
    };

    return (
        // <section className={styles.projects}>
        //     <h1>My Projects</h1>
        //     <div className={styles.boxContainer}>
        //         <div className={styles.box1}>
        //             <img src="/images/portfolio.png" alt="portfolio" />
        //             <h2>Portfolio Website</h2>
        //             <p>It is my Portfolio Website where you can get to know about me.</p>
        //         </div>
        //         <div className={styles.box1}>
        //             <img src="/images/portfolio.png" alt="portfolio" />
        //             <h2>Portfolio Website</h2>
        //             <p>It is my Portfolio Website where you can get to know about me.</p>
        //         </div>
        //         {/* <div className={styles.box1}>
        //             <img src="/images/portfolio.png" alt="portfolio" />
        //             <h2>Portfolio Website</h2>
        //             <p>It is my Portfolio Website where you can get to know about me.</p>
        //         </div> */}
        //     </div>
        // </section>
        <section className={styles.project} ref={ref}>
            <h1>Projects</h1>
            <div className={styles.slider_container}>
                <button className={styles.prev} onClick={() => moveSlide(-1)}><img src="/images/left_arrow.png" alt="projects"/></button>
                <div className={styles.project_container}>
                    <img src={projects[currentIndex].src} alt="projects" />
                    <h2>{projects[currentIndex].title}</h2>
                    <p>{projects[currentIndex].description}</p>
                </div>
                <button className={styles.next} onClick={() => moveSlide(1)}><img src="/images/right_arrow.png" alt="projects"/></button>
            </div>
        </section>
    );
});

export default Projects;