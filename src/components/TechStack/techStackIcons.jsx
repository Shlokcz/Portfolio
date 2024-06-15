// import TechStack from "./TechStack";
import styles from "./TechStackIcons.module.css";

function Icons(props) {
 return (
    <div className={styles.icons}>
        <img src={props.img} alt="Problem!" />
        <div className={styles.star}>
            <span className={styles.greenStar}>★</span>
            <span className={styles.greenStar}>★</span>
            <span className={styles.greenStar}>★</span>
            <span className={styles.greenStar}>★</span>
            <span>★</span>
        </div>
    </div>
 );
}

export default Icons;