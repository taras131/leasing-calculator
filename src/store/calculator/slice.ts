import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchForm} from "./thunk";
import {
    COST_CAR_INITIAL_VALUE, COST_CAR_MAX_VALUE,
    COST_CAR_MIN_VALUE, DOWN_PAYMENT_INITIAL_VALUE, DOWN_PAYMENT_MAX_VALUE, DOWN_PAYMENT_MIN_VALUE,
    inputLabels,
    inputNames,
    inputUnitMeasurements, LEASING_PERIOD_INITIAL_VALUE, LEASING_PERIOD_MAX_VALUE, LEASING_PERIOD_MIN_VALUE,
} from "../../utils/const";
import {IInitialState, IOnChangePayload} from "../../models/calculator";


const initialState: IInitialState = {
    isLoading: false,
    error: null,
    serverResponseMessage: "",
    costCar: {
        label: inputLabels.costCar,
        name: inputNames.costCar,
        value: COST_CAR_INITIAL_VALUE,
        minValue: COST_CAR_MIN_VALUE,
        maxValue: COST_CAR_MAX_VALUE,
        unitMeasurement: inputUnitMeasurements.costCar,
    },
    downPayment: {
        label: inputLabels.downPayment,
        name: inputNames.downPayment,
        value: DOWN_PAYMENT_INITIAL_VALUE,
        minValue: DOWN_PAYMENT_MIN_VALUE,
        maxValue: DOWN_PAYMENT_MAX_VALUE,
        unitMeasurement: inputUnitMeasurements.downPayment,
    },
    leasingPeriod: {
        label: inputLabels.leasingPeriod,
        name: inputNames.leasingPeriod,
        value: LEASING_PERIOD_INITIAL_VALUE,
        minValue: LEASING_PERIOD_MIN_VALUE,
        maxValue: LEASING_PERIOD_MAX_VALUE,
        unitMeasurement: inputUnitMeasurements.leasingPeriod,
    },
};

export const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        onInputChange(state, action: PayloadAction<IOnChangePayload>) {
            state[action.payload.name] = {
                ...state[action.payload.name], value: action.payload.value,
            };
        },
    },
    extraReducers: {
        [fetchForm.pending.type]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [fetchForm.fulfilled.type]: (state, {payload}) => {
            state.serverResponseMessage = payload;
            state.isLoading = false;
        },
        [fetchForm.rejected.type]: (state, {payload}) => {
            state.serverResponseMessage = "";
            state.isLoading = false;
            state.error = payload;
        },
    },
});

export const {onInputChange} = calculatorSlice.actions;
export default calculatorSlice.reducer;