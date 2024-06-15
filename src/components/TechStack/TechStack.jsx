import styles from "./TechStack.module.css"
import Icons from "./techStackIcons"
import DevIcons from "../../DevIcons";

function TechStack() {

    function Skills(icon){
        // console.log(icon.skillName);
        // console.log(icon.skillImg);
        return <Icons key={icon.id} name={icon.skillName} img={icon.skillImg} />;
    }

    return (
    <section className={styles.techStack}>
        <div>
            <h1>Technology Stack</h1>
        </div>
        <div className={styles.icons}>
            {DevIcons.map(Skills)}
        </div>
    </section>
    )
}

export default TechStack;