// import TechStack from "./TechStack";
import styles from "./TechStackIcons.module.css";
import { Tilt } from "react-tilt";

function Icons(props) {
  return (
    <div className={styles.icons}>
      <Tilt>
        <img src={props.img} alt="Problem!" />
      </Tilt>
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
