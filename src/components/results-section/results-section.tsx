import React from "react";
import {SectionWrapper} from "./styles";
import ResultItem from "./result-item";
import Button from "../button";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {
    getCostCarValue,
    getDownPaymentValue,
    getIsLoading, getLeasingPeriodValue,
    getMonthlyPayment,
    getTotalSum,
} from "../../store/calculator/selectors";
import {getValueWithSpace} from "../../utils/services";
import {fetchForm} from "../../store/calculator/thunk";

const ResultsSection = () => {
    const dispatch = useAppDispatch();
    const totalSum = useAppSelector(state => getTotalSum(state));
    const monthlyPayment = useAppSelector(state => getMonthlyPayment(state));
    const isLoading = useAppSelector(state => getIsLoading(state));
    const costCar = useAppSelector(state => getCostCarValue(state));
    const downPayment = useAppSelector(state => getDownPaymentValue(state));
    const leasingPeriod = useAppSelector(state => getLeasingPeriodValue(state));
    const handleClick = () => {
        dispatch(fetchForm({price: costCar, initial: downPayment, months: leasingPeriod}));
    };
    return (
        <SectionWrapper>
            <ResultItem label={"Сумма договора лизинга"} value={getValueWithSpace(totalSum)}/>
            <ResultItem label={"Ежемесячный платеж от"} value={getValueWithSpace(monthlyPayment)}/>
            <Button text="Оформить" isLoading={isLoading} handleClick={handleClick}/>
        </SectionWrapper>
    );
};

export default ResultsSection;