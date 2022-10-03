import React, {FC} from "react";
import {UnitMeasurementWrapper} from "./styles";

interface IUnitMeasurement {
    unitMeasurement: string
    isLoading: boolean
}

const UnitMeasurement: FC<IUnitMeasurement> = ({unitMeasurement, isLoading}) => {
    let backgroundColor = "none";
    let fontSize = "30px";
    if (unitMeasurement.indexOf("%") !== -1) {
        fontSize = "22px";
        backgroundColor = "#EBEBEC";
    }
    return (
        <UnitMeasurementWrapper backgroundColor={backgroundColor} fontSize={fontSize} isLoading={isLoading}>
            {unitMeasurement}
        </UnitMeasurementWrapper>
    );
};

export default UnitMeasurement;