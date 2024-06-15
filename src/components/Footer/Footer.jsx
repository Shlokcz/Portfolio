import styles from "./Footer.module.css"
import { Link } from "react-router-dom";

function Footer({onScrollToSection, onScrollToSection2,onScrollToSection3}) {

    let date = new Date();
    const year = date.getFullYear();
    // console.log(year);
    return (
        <section className={styles.foooter}>
            <div className={styles.footer}>
                <div className={styles.links}>
                    <h2>More Links</h2>
                    <ul>
                        <li onClick={onScrollToSection}>Certificates</li>
                        <li onClick={onScrollToSection2}>Projects</li>
                        <li><a href="https://drive.google.com/file/d/1Qu5zSUhxBRHGoayn6p05Jc3nthIjeHEJ/view?usp=sharing">Resume</a></li>
                        <li onClick={onScrollToSection3}>Home</li>
                    </ul>
                </div>
                <div className={styles.talkHeading}>
                    <h2>Interested in working with me?</h2>
                    <button><Link to="/contact" className={styles.link}>Let's Talk</Link></button>
                    <p>My name is Shlok Gupta, and my portfolio is a representation of all that I've learned and accomplished as a Computer Science graduate. I love designing website and am looking for oppurtunity to work. While I am based in India, I help people from all around the World.</p>
                </div>
                <div className={styles.social}>
                    <h2>Social</h2>
                    <a href="https://www.linkedin.com/in/shlok-gupta-46a66a18b/?trk=opento_sprofile_topcard"><img src="/images/linkedin.png" alt="linkedin" /></a>
                    <a href="https://www.instagram.com/shlok_0710?igsh=MTFzN3U3aXM1ZGZ0cA%3D%3D&utm_source=qr"><img src="/images/instagram.png" alt="instagram" /></a>
                    <a href="https://github.com/Shlokcz"><img src="/images/github.png" alt="github" /></a>
                </div>
            </div>
            <div className={styles.copyright}>
                <h2>Copyright {year}</h2>
            </div>
        </section>
    );
}

export default Footer;