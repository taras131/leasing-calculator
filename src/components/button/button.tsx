import React, {FC} from "react";
import {ButtonWrapper} from "./styles";
import loadingIcon from "../../assets/img/ellipse.png";

interface IButton {
    text: string
    isDisable?: boolean
    isLoading?: boolean,
    handleClick: () => void
}

const Button: FC<IButton> = ({text,
                                 isDisable = false,
                                 isLoading = false,
                                 handleClick}) => {
    return (
        <ButtonWrapper
            disabled={isDisable}
            isLoading ={isLoading}
            onClick={handleClick}>
            {isLoading
                ? (<img src={loadingIcon} alt="loading"/>)
                : text}
        </ButtonWrapper>
    );
};

export default Button;