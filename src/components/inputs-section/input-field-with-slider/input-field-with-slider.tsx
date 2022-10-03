import React, {FC, useEffect, useState} from "react";
import {InputFieldWrapper, Input} from "./styles";
import UnitMeasurement from "./unit-measurement";
import Slider from "./slider";
import {IInputField} from "../../../models/calculator";
import {inputUnitMeasurements} from "../../../utils/const";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {getCostCarValue, getIsLoading} from "../../../store/calculator/selectors";
import {onInputChange} from "../../../store/calculator/slice";
import {getValueWithoutSpace, getValueWithSpace} from "../../../utils/services";

interface IInputFieldWithSlider extends IInputField {
    isDisable?: boolean
}

const InputFieldWithSlider: FC<IInputFieldWithSlider> = ({
                                                             label,
                                                             name,
                                                             value,
                                                             minValue,
                                                             maxValue,
                                                             unitMeasurement,
                                                             isDisable = false,
                                                         }) => {
    const dispatch = useAppDispatch();
    const [isFocus, setIsFocus] = useState(false);
    const [currentValue, setCurrentValue] = useState(value);
    const costCarValue = useAppSelector(state => getCostCarValue(state));
    const isLoading = useAppSelector(state => getIsLoading(state));
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = getValueWithoutSpace(e.target.value);
        if (newValue >= 0 && newValue < 10000000000) {
            if (isFocus) {
                setCurrentValue(newValue);
            } else {
                dispatch(onInputChange({name, value: newValue}));
            }
        }
    };
    const handleFocus = () => {
        setIsFocus(true);
    };
    const handleBlur = () => {
        setIsFocus(false);
        let newValue = currentValue;
        if (newValue > maxValue) newValue = maxValue;
        if (newValue < minValue) newValue = minValue;
        setCurrentValue(newValue);
        dispatch(onInputChange({name, value: newValue}));
    };
    const handleKeyPress = (e: any) => {
        if (e.key === "Enter") {
            e.preventDefault();
            e.target.blur();
        }
    };
    const getShowValue = () => {
        let showValue;
        if (unitMeasurement === inputUnitMeasurements.downPayment) {
            if (isFocus) {
                showValue = currentValue;
            } else {
                showValue = getValueWithSpace(Math.floor(value * costCarValue / 100))
                    + " " + inputUnitMeasurements.costCar;
            }
        } else {
            showValue = getValueWithSpace(currentValue);
        }
        return showValue;
    };
    useEffect(() => {
        setCurrentValue(value);
    }, [value]);
    return (
        <InputFieldWrapper>
            <label htmlFor={name}>{label}</label>
            <Input type="text"
                   id={name}
                   name={name}
                   value={getShowValue()}
                   onChange={handleChange}
                   onFocus={handleFocus}
                   onBlur={handleBlur}
                   onKeyPress={handleKeyPress}
                   disabled={isDisable || isLoading}/>
            <UnitMeasurement isLoading={isLoading}
                             unitMeasurement={unitMeasurement === inputUnitMeasurements.downPayment
                                 ? value + unitMeasurement
                                 : unitMeasurement}/>
            <Slider
                value={currentValue}
                onChange={handleChange}
                minValue={minValue}
                maxValue={maxValue}
                isLoading={isLoading}/>
        </InputFieldWrapper>
    );
};

export default InputFieldWithSlider;