import { useEffect, useState } from "react";
import Inputter from '../components/Inputter'
import { useHistory } from 'react-router-dom';

const InputterContainer = () => {
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
        <Inputter 
            phoneNumber = {phoneNumber}
            clear = {clear}
            deleteNum = {deleteNum}
            history = {history}
            isActive = {isActive}
            type = {type}
        />
    )

}

export default InputterContainer;