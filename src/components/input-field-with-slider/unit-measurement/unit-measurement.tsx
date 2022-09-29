import React, {FC} from 'react';
import {UnitMeasurementWrapper} from "./style"

interface IUnitMeasurement {
    unitMeasurement: string
}

const UnitMeasurement: FC<IUnitMeasurement> = ({unitMeasurement}) => {
    let backgroundColor = "none"
    if (unitMeasurement.indexOf("%") !== -1) backgroundColor = "#EBEBEC"
    return (
        <UnitMeasurementWrapper backgroundColor={backgroundColor}>
            {unitMeasurement}
        </UnitMeasurementWrapper>
    );
};

export default UnitMeasurement;