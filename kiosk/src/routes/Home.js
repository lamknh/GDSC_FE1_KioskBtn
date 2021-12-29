import Inputter from "../components/Inputter.js";
import styles from "./Home.module.css";

function Home(){
    return(
        <div className={styles.home}>
            <Inputter />
        </div>
    );
}

export default Home;