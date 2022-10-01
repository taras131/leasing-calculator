import React, {FC} from 'react';
import {ResultItemWrapper} from "./styles";

interface IResultItem {
    label: string
    value: number
}
const ResultItem:FC<IResultItem> = ({label, value}) => {
    return (
        <ResultItemWrapper>
            <p>{label}</p>
            <span>{value} ₽</span>
        </ResultItemWrapper>
    );
};

export default ResultItem;