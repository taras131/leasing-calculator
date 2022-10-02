import {inputLabels, inputNames, inputUnitMeasurements} from "../../utils/const";

export interface IInputField {
    label: inputLabels,
    name: inputNames,
    value: number,
    minValue: number,
    maxValue: number,
    unitMeasurement: inputUnitMeasurements
}

export interface IInitialState {
    isLoading: boolean,
    error: null | string,
    serverResponseMessage: null | string,
    costCar: IInputField,
    downPayment: IInputField,
    leasingPeriod: IInputField,
}