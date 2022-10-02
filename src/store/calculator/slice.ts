import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchForm} from './thunk';
import {inputLabels, inputNames, inputUnitMeasurements} from "../../utils/const";
import {IInitialState} from "../../models/calculator";


const initialState: IInitialState = {
    isLoading: false,
    error: null,
    serverResponseMessage: "",
    costCar: {
        label: inputLabels.costCar,
        name: inputNames.costCar,
        value: 3300000,
        minValue: 1000000,
        maxValue: 6000000,
        unitMeasurement: inputUnitMeasurements.costCar
    },
    downPayment: {
        label: inputLabels.downPayment,
        name: inputNames.downPayment,
        value: 13,
        minValue: 10,
        maxValue: 60,
        unitMeasurement: inputUnitMeasurements.downPayment
    },
    leasingPeriod: {
        label: inputLabels.leasingPeriod,
        name: inputNames.leasingPeriod,
        value: 60,
        minValue: 1,
        maxValue: 60,
        unitMeasurement: inputUnitMeasurements.leasingPeriod
    },
}

interface IOnChangePayload {
    name: inputNames
    value: number
}

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        onInputChange(state, action: PayloadAction<IOnChangePayload>) {
            state[action.payload.name] = {
                ...state[action.payload.name], value: action.payload.value
            }
        }
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