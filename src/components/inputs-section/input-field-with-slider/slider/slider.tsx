import React, {FC} from 'react';
import {SliderWrapper} from "./styles";

interface ISlider {
    value: number,
    minValue: number,
    maxValue: number,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Slider: FC<ISlider> = ({value, minValue, maxValue, onChange}) => {
    return (
        <SliderWrapper>
            <input type="range" min={minValue} max={maxValue} value={value} className="slider" onChange={onChange}/>
        </SliderWrapper>
    );
};

export default Slider;