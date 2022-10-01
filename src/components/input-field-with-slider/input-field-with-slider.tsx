import React, {FC} from 'react';
import {InputFieldWrapper, Label, Input} from "./styles";
import UnitMeasurement from "./unit-measurement";
import Slider from "./slider";

interface IInputFieldWithSlider {
    label: string
    inputName: "costCar" | "downPayment" | "leasingPeriod"
    value: number
    minValue: number
    maxValue: number
    unitMeasurement: string
    onChange: (name: "costCar" | "downPayment" | "leasingPeriod", value: number) => void
    costCar?: number
}

const InputFieldWithSlider: FC<IInputFieldWithSlider> = ({
                                                             label,
                                                             inputName,
                                                             value,
                                                             minValue,
                                                             maxValue,
                                                             unitMeasurement,
                                                             onChange,
                                                             costCar
                                                         }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (costCar) {

        } else {
            onChange(inputName, +e.target.value)
        }
    }
    return (
        <InputFieldWrapper>
            <Label htmlFor={inputName}>{label}</Label>
            <Input type="number" id={inputName} name={inputName}
                   value={costCar ? Math.floor(value * costCar / 100) : value}
                   onChange={handleChange}/>
            <UnitMeasurement unitMeasurement={unitMeasurement}/>
            <Slider value={value} onChange={handleChange} minValue={minValue} maxValue={maxValue}/>
        </InputFieldWrapper>
    );
};

export default InputFieldWithSlider;