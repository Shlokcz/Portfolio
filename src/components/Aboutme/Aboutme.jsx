import styles from "./Aboutme.module.css"

function Aboutme() {
    return (
        <section className={styles.aboutme}>
            <h1>About Me</h1>
            <h2>Here to Provide End-to-End Business solutions.</h2>
            <div className={styles.rows}>
                <div className={styles.box}>
                    <h2>What can I do?</h2>
                    <p>I am a Enthusiast when it comes to Web development. It's my passion to persue this carrier and make people's life easier </p>
                </div>
                <div className={styles.box}>
                    <h2>What am I currently doing?</h2>
                    <p>I am currently upskilling myself in the field of Web Development as well as Salesforce because of the everchanging technology.</p>
                </div> 
                <div className={styles.box}>
                    <h2>What do I believe in?</h2>
                    <p>Work Harder! Obstacles in your path should not stop you from moving forward. Study new things when you really feel like and give your 100%.</p>
                </div>
                <div className={styles.box}>
                    <h2>How can I help you?</h2>
                    <p>If you want your website to be built, I'm here to assist you with everything under my power to create an awesome looking functional Website.</p>
                </div>
            </div>
        </section>
    );
}

export default Aboutme;