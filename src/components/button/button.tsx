import React, {FC} from 'react';
import {ButtonWrapper} from "./styles";
import loadingIcon from "../../assets/ellipse.png"

interface IButton {
    text: string
    isDisable?: boolean
    isLoading?: boolean
}

const Button: FC<IButton> = ({text, isDisable, isLoading}) => {
    return (
        <ButtonWrapper disabled={isDisable} className={"no_hover"}>
            {isLoading
                ? (<img src={loadingIcon} alt="loading"/>)
                : text}
        </ButtonWrapper>
    );
};

export default Button;