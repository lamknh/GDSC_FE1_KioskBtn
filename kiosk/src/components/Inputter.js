import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import style from './Inputter.module.css';
import styled from "styled-components";
import ReactRouterPropTypes from 'react-router-prop-types';

const StyledButton = styled(Button)`
    background-color: #FFC300;
    color: #000000;
`;

const Inputter = ({ phoneNumber, clear, deleteNum, history, isActive, type }) => {
    return (
        <div className = "wrapper">
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

Inputter.propTypes = {
    phoneNumber : PropTypes.func,
    clear : PropTypes.func,
    deleteNum : PropTypes.func,
    history : ReactRouterPropTypes.history,
    isActive : PropTypes.bool,
    type : PropTypes.string,
};

export default Inputter;