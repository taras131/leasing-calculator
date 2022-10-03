import React, {FC} from 'react';
import {ButtonWrapper} from "./styles";
import loadingIcon from "../../assets/img/ellipse.png"

interface IButton {
    text: string
    isDisable?: boolean
    isLoading?: boolean,
    handleClick: () => void
}

const Button: FC<IButton> = ({text, isDisable = false, isLoading = false, handleClick}) => {
    let events = "auto"
    if (isDisable || isLoading) events = "none"
    console.log(events)
    return (
        <ButtonWrapper
            disabled={isDisable}
            events={events}
            onClick={handleClick}>
            {isLoading
                ? (<img src={loadingIcon} alt="loading"/>)
                : text}
        </ButtonWrapper>
    );
};

export default Button;