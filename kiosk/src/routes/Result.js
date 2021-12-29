import { PropTypes } from "prop-types";
import { useParams } from "react-router-dom";
import style from "./Result.module.css";

function Result(){
    const { phoneNum } = useParams();

    return(
        <div className={style.result}>
            <h1>{phoneNum}</h1>
        </div>
    );
}

Result.prototypes = {
    phoneNum: PropTypes.string.isRequired,
};

export default Result;