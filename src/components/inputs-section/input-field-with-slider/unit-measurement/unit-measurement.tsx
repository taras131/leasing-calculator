import React, {FC} from "react";
import {UnitMeasurementWrapper} from "./styles";

interface IUnitMeasurement {
    unitMeasurement: string
    isLoading: boolean
}

const UnitMeasurement: FC<IUnitMeasurement> = ({unitMeasurement, isLoading}) => {
    const isPercent = unitMeasurement.indexOf("%") !== -1;
    return (
        <UnitMeasurementWrapper isLoading={isLoading}
                                isPercent={isPercent}>
            {unitMeasurement}
        </UnitMeasurementWrapper>
    );
};

export default UnitMeasurement;