import {RootState} from "../store";
import {IInputField} from "../../models/calculator";
import {INTEREST_RATE} from "../../utils/const";

export const getIsLoading = (state: RootState): boolean => {
    return state.calculator.isLoading
}
export const getCostCar = (state: RootState): IInputField => {
    return state.calculator.costCar
}
export const getDownPayment = (state: RootState): IInputField => {
    return state.calculator.downPayment
}
export const getLeasingPeriod = (state: RootState): IInputField => {
    return state.calculator.leasingPeriod
}
export const getCostCarValue = (state: RootState): number => {
    return state.calculator.costCar.value
}
export const getDownPaymentValue = (state: RootState): number => {
    return state.calculator.downPayment.value
}
export const getLeasingPeriodValue = (state: RootState): number => {
    return state.calculator.leasingPeriod.value
}
export const getMonthlyPayment = (state: RootState): number => {
    const costCarValue = getCostCarValue(state)
    const downPaymentInRubles = getDownPaymentValue(state) * costCarValue / 100
    const leasingPeriodValue = getLeasingPeriodValue(state)
    return Math.floor((costCarValue - downPaymentInRubles)
        * (INTEREST_RATE * Math.pow(1 + INTEREST_RATE, leasingPeriodValue))
        / (Math.pow(1 + INTEREST_RATE, leasingPeriodValue) - 1))
}
export const getTotalSum = (state: RootState): number => {
    return Math.floor(state.calculator.downPayment.value + state.calculator.leasingPeriod.value * getMonthlyPayment(state))
}

