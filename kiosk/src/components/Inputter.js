// import styles from "./Inputter.moodule.css";
import { Button } from '@mui/material';
import style from './Inputter.module.css';

function InputterPresenter(props) {
    return (
        <div className={style.inputter}>
            <div className={style.text}>
                <h1>010-8813-4378</h1>
            </div>
            <div>
                <Button sx={{ m: 1, p: 2 }} variant="contained">1</Button>
                <Button sx={{ m: 1, p: 2 }} variant="contained">2</Button>
                <Button sx={{ m: 1, p: 2 }} variant="contained">3</Button>
            </div>
            <div>
                <Button sx={{ m: 1, p: 2 }} variant="contained">4</Button>
                <Button sx={{ m: 1, p: 2 }} variant="contained">5</Button>
                <Button sx={{ m: 1, p: 2 }} variant="contained">6</Button>
            </div>
            <div>
                <Button sx={{ m: 1, p: 2 }} variant="contained">7</Button>
                <Button sx={{ m: 1, p: 2 }} variant="contained">8</Button>
                <Button sx={{ m: 1, p: 2 }} variant="contained">9</Button>
            </div>
            <div>
                <Button sx={{ m: 1, p: 2 }} variant="contained">X</Button>
                <Button sx={{ m: 1, p: 2 }} variant="contained">0</Button>
                <Button sx={{ m: 1, p: 2 }} variant="contained">◀</Button>
            </div>
        </div>
    );
}

export default InputterPresenter;