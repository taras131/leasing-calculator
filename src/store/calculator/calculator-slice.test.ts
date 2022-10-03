import reducer, {initialState, onInputChange} from "./slice";
import {AnyAction} from "@reduxjs/toolkit";
import {inputNames} from "../../utils/const";

describe.only("Redux calculator slice", () => {
    test("Should be return the initial state", () => {
        expect(reducer(undefined, {} as AnyAction)).toEqual(initialState);
    });
    test("Should be costCar value is 4000000", () => {
        const newState = reducer(initialState, onInputChange({name: inputNames.costCar, value: 4000000}));
        expect(newState.costCar.value).toEqual(4000000);
    });
    test("Should be downPayment value is 20", () => {
        const newState = reducer(initialState, onInputChange({name: inputNames.downPayment, value: 20}));
        expect(newState.downPayment.value).toEqual(20);
    });
    test("Should be leasingPeriod value is 40", () => {
        const newState = reducer(initialState, onInputChange({name: inputNames.leasingPeriod, value: 40}));
        expect(newState.leasingPeriod.value).toEqual(40);
    });
});