import { createAsyncThunk } from "@reduxjs/toolkit";
import {fetchCalculatorData} from "../../api/calculator-api";

const handlerError = (e: any) => {
    if (e instanceof Error && e.message) return e.message;
    return "неизвестная ошибка";
};

export const fetchForm= createAsyncThunk(
    "calculator/fetch",
    async (formData: any, ThunkAPI) => {
        try {
            const res = await fetchCalculatorData(formData);
            return res;
        } catch (e) {
            return ThunkAPI.rejectWithValue(handlerError(e));
        }
    }
);


