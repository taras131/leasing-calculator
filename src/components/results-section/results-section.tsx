import React from "react";
import ResultItem from "./result-item";
import Button from "../button";
import {SectionWrapper} from "./styles";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchForm} from "../../store/calculator/thunk";
import {
    getCostCarValue,
    getDownPaymentValue,
    getIsLoading, getLeasingPeriodValue,
    getMonthlyPayment,
    getTotalSum,
} from "../../store/calculator/selectors";
import {getValueWithSpace} from "../../utils/services";

import {MONTHLY_PAYMENT_LABEL, SUBMIT_BUTTON_LABEL, TOTAL_SUM_LABEL} from "../../utils/const";

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
            <ResultItem label={TOTAL_SUM_LABEL} value={getValueWithSpace(totalSum)}/>
            <ResultItem label={MONTHLY_PAYMENT_LABEL} value={getValueWithSpace(monthlyPayment)}/>
            <Button text={SUBMIT_BUTTON_LABEL} isLoading={isLoading} handleClick={handleClick}/>
        </SectionWrapper>
    );
};

export default ResultsSection;