import React, {FC} from 'react';
import {SliderWrapper} from "./styles";

interface ISlider {
    value: number,
    minValue: number,
    maxValue: number,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Slider: FC<ISlider> = ({value, minValue, maxValue, onChange}) => {
    const borderColor = (value - minValue) * 100 / (maxValue- minValue)
    const background = `-webkit-linear-gradient(left,#FF9514 0%,  #FF9514 ${borderColor}%, #E1E1E1 ${borderColor}%, #E1E1E1 100%)`
    return (
        <SliderWrapper>
            <input type="range"
                   min={minValue}
                   max={maxValue}
                   value={value}
                   className="slider"
                   onChange={onChange}
                   style={{background: background}}/>
        </SliderWrapper>
    );
};

export default Slider;