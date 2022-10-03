import React, {FC} from 'react';
import {UnitMeasurementWrapper} from "./styles"

interface IUnitMeasurement {
    unitMeasurement: string
}

const UnitMeasurement: FC<IUnitMeasurement> = ({unitMeasurement}) => {
    let backgroundColor = "none"
    let fontSize = "30px"
    if (unitMeasurement.indexOf("%") !== -1) {
        fontSize = "22px"
        backgroundColor = "#EBEBEC"
    }
    return (
        <UnitMeasurementWrapper backgroundColor={backgroundColor} fontSize={fontSize}>
            {unitMeasurement}
        </UnitMeasurementWrapper>
    );
};

export default UnitMeasurement;