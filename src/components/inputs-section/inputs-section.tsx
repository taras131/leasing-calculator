import React from 'react';
import {SectionWrapper} from "./styles";
import {useAppSelector} from "../../hooks/redux";
import {getCostCar, getDownPayment, getLeasingPeriod} from "../../store/calculator/selectors";
import InputFieldWithSlider from "./input-field-with-slider";

const InputsSection = () => {
    const costCar = useAppSelector(state => getCostCar(state))
    const downPayment = useAppSelector(state => getDownPayment(state))
    const leasingPeriod = useAppSelector(state => getLeasingPeriod(state))
    return (
        <SectionWrapper>
            <InputFieldWithSlider {...costCar}/>
            <InputFieldWithSlider {...downPayment}/>
            <InputFieldWithSlider {...leasingPeriod}/>
        </SectionWrapper>
    );
};

export default InputsSection;