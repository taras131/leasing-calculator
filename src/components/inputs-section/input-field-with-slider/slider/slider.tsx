import React, {FC} from "react";
import {SliderWrapper} from "./styles";

interface ISlider {
    value: number,
    minValue: number,
    maxValue: number,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    isLoading?: boolean
}

const Slider: FC<ISlider> = ({
                                 value,
                                 minValue,
                                 maxValue,
                                 onChange,
                                 isLoading = false,
                             }) => {
    const borderColor = (value - minValue) * 100 / (maxValue - minValue);
    const background = `-webkit-linear-gradient(left,#FF9514 0%,  #FF9514 ${borderColor}%,
     #E1E1E1 ${borderColor}%, #E1E1E1 100%)`;
    return (
        <SliderWrapper>
            <input type="range"
                   min={minValue}
                   max={maxValue}
                   value={value}
                   className="slider"
                   onChange={onChange}
                //нехорошо применять инлайн стили, но если передавать значеня в пропсах, при активном перетаскивании
                //ползунка, появляется предупреждение в консоли
                   style={{background: background}}
                   disabled={isLoading}/>
        </SliderWrapper>
    );
};

export default Slider;