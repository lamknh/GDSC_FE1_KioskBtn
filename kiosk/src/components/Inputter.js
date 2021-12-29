import { useEffect, useState } from "react";
import { Button } from '@mui/material';
import style from './Inputter.module.css';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

const StyledButton = styled(Button)`
    background-color: #FFC300;
    color: #000000;
`;

function InputterPresenter() {
    const [type, setTyping] = useState("");
    const [isActive, setActive] = useState(true);

    let history = useHistory();

    const phoneNumber = (num) => {
        const regex = /^[0-9\b -]{0,13}$/;
        if (regex.test(type + num)) {
            setTyping(type + num)
        }
    }

    useEffect(() => {
        if (type.length === 10) {
            setTyping(type.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
        }
        if (type.length === 13) {
          setTyping(type.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        }
        if(type.length < 12){
            setActive(true);
        } else {
            setActive(false);
        }
      }, [type]);

    const clear = () => {
        setTyping("")
    }

    const deleteNum = () => {
        const type2 = type.slice(0, -1)
        setTyping(type2)
    }

    return (
        <div>
            <div className={style.text}>
                <h1>{type}</h1>
            </div>
            <div className={style.inputter}>
                <div>
                    <div>
                        <Button sx={{ m: 1, p: 2 }} variant="contained" onClick={() => {phoneNumber(1)}}>1</Button>
                        <Button sx={{ m: 1, p: 2 }} variant="contained" onClick={() => {phoneNumber(2)}}>2</Button>
                        <Button sx={{ m: 1, p: 2 }} variant="contained" onClick={() => {phoneNumber(3)}}>3</Button>
                    </div>
                    <div>
                        <Button sx={{ m: 1, p: 2 }} variant="contained" onClick={() => {phoneNumber(4)}}>4</Button>
                        <Button sx={{ m: 1, p: 2 }} variant="contained" onClick={() => {phoneNumber(5)}}>5</Button>
                        <Button sx={{ m: 1, p: 2 }} variant="contained" onClick={() => {phoneNumber(6)}}>6</Button>
                    </div>
                    <div>
                        <Button sx={{ m: 1, p: 2 }} variant="contained" onClick={() => {phoneNumber(7)}}>7</Button>
                        <Button sx={{ m: 1, p: 2 }} variant="contained" onClick={() => {phoneNumber(8)}}>8</Button>
                        <Button sx={{ m: 1, p: 2 }} variant="contained" onClick={() => {phoneNumber(9)}}>9</Button>
                    </div>
                    <div>
                        <Button sx={{ m: 1, p: 2 }} variant="contained" onClick={() => {clear()}}>X</Button>
                        <Button sx={{ m: 1, p: 2 }} variant="contained" onClick={() => {phoneNumber(0)}}>0</Button>
                        <Button sx={{ m: 1, p: 2 }} variant="contained" onClick={() => {deleteNum()}}>◀</Button>
                    </div>
                </div>
                <div className={style.submitBtnDiv}>
                    <StyledButton onClick={() => {history.push(`/result/${type}`)}}
                        sx={{ m : 2, px: 6, py: 1.5 }} variant="contained" disabled={isActive}>
                        제출 버튼
                    </StyledButton>
                </div>
            </div>
        </div>
    );
}

export default InputterPresenter;