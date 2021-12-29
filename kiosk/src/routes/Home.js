// import { useEffect, useState } from "react";
import Inputter from "../components/Inputter.js";
import SubmitBtn from "../components/SubmitBtn.js";
import styles from "./Home.module.css";

function Home(){
    return(
        <div className={styles.home}>
            <Inputter />
            <SubmitBtn />
        </div>
    );
}

export default Home;