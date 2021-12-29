import {Link} from 'react-router-dom'
import { Button } from '@mui/material';
import styled from "styled-components";
import style from "./SubmitBtn.module.css";

const StyledButton = styled(Button)`
    background-color: #FFC300;
    color: #000000;
`;

function SubmitBtnPresenter({phoneNum}) {
    return(
        <div className={style.submitBtnDiv}>
            <Link to={`/result/${phoneNum}`}>
                <StyledButton sx={{ m : 2, px: 6, py: 1.5 }} variant="contained" color="secondary">
                    제출 버튼
                </StyledButton>
            </Link>
        </div>
    );
}

export default SubmitBtnPresenter;