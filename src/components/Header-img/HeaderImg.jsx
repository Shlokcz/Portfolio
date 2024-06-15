import styles from "./HeaderImg.module.css"
import { useState, useEffect, forwardRef} from "react";

const HeadingImg = forwardRef((props, ref) => {

    const text = "Full Stack Web Developer";
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
          const timeoutId = setTimeout(() => {
            setDisplayedText(displayedText + text.charAt(index));
            setIndex(index + 1);
          }, 80);
          return () => clearTimeout(timeoutId);
        } else {
          const timeoutId = setTimeout(() => {
            setDisplayedText('');
            setIndex(0);
          }, 800);
          return () => clearTimeout(timeoutId);
        }
      }, [index, displayedText, text]);

    return (
        <section className={styles.headerImg} ref={ref}>
            <img src="/images/profile_photo.jpeg" alt="profile pic" />
            <div className={styles.para}>
                <h1>{displayedText}</h1>
                <p>
                    Let's connect and embark on a journey to harness the power of technology for a brighter tomorrow.
                </p>
            </div>
        </section>
    );
});

export default HeadingImg;

/* <a href="https://www2.deloitte.com/ui/en.html">Deloitte USI</a> */
// I bring a blend of Technical expertise and Analytical skills to the table.
// My journey in the world of technology has equipped me with a deep understanding of complex systems and the ability to navigate through diverse challenges with agility and precision. 