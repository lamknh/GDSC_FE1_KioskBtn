import style from "./Result.module.css";

function Result({phoneNum}){
    return(
        <div className={style.result}>
            <h1>{phoneNum}</h1>
        </div>
    );
}

export default Result;