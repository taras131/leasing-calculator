import React, {FC} from 'react';
import {ButtonWrapper} from "./styles";
import loadingIcon from "../../assets/img/ellipse.png"

interface IButton {
    text: string
    isDisable?: boolean
    isLoading?: boolean
}

const Button: FC<IButton> = ({text, isDisable, isLoading}) => {
    let events = "auto"
    if(isDisable || isLoading) events = "none"
    return (
        <ButtonWrapper disabled={isDisable} events={events}>
            {isLoading
                ? (<img src={loadingIcon} alt="loading"/>)
                : text}
        </ButtonWrapper>
    );
};

export default Button;