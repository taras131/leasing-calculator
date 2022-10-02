import React from 'react';
import {SectionWrapper} from "./styles"
import ResultItem from "./result-item";
import Button from "../button";
import {useAppSelector} from "../../hooks/redux";
import {getMonthlyPayment, getTotalSum} from "../../store/calculator/selectors";
import {getValueWithSpace} from "../../utils/services";

const ResultsSection = () => {
    const totalSum = useAppSelector(state => getTotalSum(state))
    const monthlyPayment = useAppSelector(state => getMonthlyPayment(state))
    return (
        <SectionWrapper>
            <ResultItem label={"Сумма договора лизинга"} value={getValueWithSpace(totalSum)}/>
            <ResultItem label={"Ежемесячный платеж от"} value={getValueWithSpace(monthlyPayment)}/>
            <Button text="Оформить" isLoading={true}/>
        </SectionWrapper>
    );
};

export default ResultsSection;