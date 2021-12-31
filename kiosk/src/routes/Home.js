import InputterContainer from "../containers/InputterContainer";
import styles from "./Home.module.css";

const Home = () => {
    return(
        <div className={styles.home}>
            <InputterContainer />
        </div>
    );
}

export default Home;