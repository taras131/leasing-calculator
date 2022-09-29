import React, {FC} from 'react';
import {InputFieldWrapper, Label, Input} from "./styles";
import UnitMeasurement from "./unit-measurement";

interface IInputFieldWithSlider {
    label: string
    inputName: string
    value: number
    unitMeasurement: string
    onChange: (e: any) => void
}

const InputFieldWithSlider:FC<IInputFieldWithSlider> = ({label,
                                                            inputName,
                                                            value,
                                                            unitMeasurement,
                                                            onChange}) => {
    return (
        <InputFieldWrapper>
            <Label htmlFor={inputName}>{label}</Label>
            <Input type="text" id={inputName} name={inputName} value={value} onChange={onChange}/>
            <UnitMeasurement unitMeasurement = {unitMeasurement}/>
        </InputFieldWrapper>
    );
};

export default InputFieldWithSlider;