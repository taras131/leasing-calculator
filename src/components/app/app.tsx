import React, {useState} from 'react';
import InputFieldWrapper from "../input-field-with-slider";
import {AppWrapper, MainWrapper, Header, DataEntrySection, ResultSection} from "./styles";

const App = () => {
    enum inputNames {costCar = "costCar", downPayment="downPayment", leasingPeriod="leasingPeriod"}
    const [calculatorState, setCalculatorState] = useState({
        costCar: {
            label: "Стоимость автомобиля",
            name: inputNames.costCar,
            value: 3300000,
            minValue: 1000000,
            maxValue: 6000000,
            unitMeasurement: "₽"
        },
        downPayment: {
            label: "Первоначальный взнос",
            name: inputNames.downPayment,
            value: 13,
            minValue: 10,
            maxValue: 60,
            unitMeasurement: "%"
        },
        leasingPeriod: {
            label: "Срок лизинга",
            name: inputNames.leasingPeriod,
            value: 60,
            minValue: 1,
            maxValue: 60,
            unitMeasurement: "мес."
        },
    })
    const handleChange = (name: "costCar" | "downPayment" | "leasingPeriod", value: number) => {
       // if(value > calculatorState[name].maxValue) value = calculatorState[name].maxValue
      //  if(value < calculatorState[name].minValue) value = calculatorState[name].minValue
        if (name === calculatorState.costCar.name) {
            setCalculatorState({...calculatorState, [name]: {...calculatorState.costCar, value: value}})
        }
        if (name === calculatorState.downPayment.name) {
            setCalculatorState({
                ...calculatorState,
                downPayment: {...calculatorState.downPayment, value: value}
            })
        }
        if (name === calculatorState.leasingPeriod.name) {
            setCalculatorState({
                ...calculatorState,
                leasingPeriod: {...calculatorState.leasingPeriod, value: value}
            })
        }
    }
    return (
        <AppWrapper>
            <MainWrapper>
                <Header>Рассчитайте стоимость автомобиля в лизинг</Header>
                <DataEntrySection>
                    <InputFieldWrapper
                        label={calculatorState.costCar.label}
                        value={calculatorState.costCar.value}
                        minValue={calculatorState.costCar.minValue}
                        maxValue={calculatorState.costCar.maxValue}
                        inputName={calculatorState.costCar.name}
                        unitMeasurement={calculatorState.costCar.unitMeasurement}
                        onChange={handleChange}/>
                    <InputFieldWrapper
                        label={calculatorState.downPayment.label}
                        value={calculatorState.downPayment.value}
                        minValue={calculatorState.downPayment.minValue}
                        maxValue={calculatorState.downPayment.maxValue}
                        inputName={calculatorState.downPayment.name}
                        unitMeasurement={calculatorState.downPayment.value + calculatorState.downPayment.unitMeasurement}
                        onChange={handleChange}
                        costCar={calculatorState.costCar.value}/>
                    <InputFieldWrapper
                        label={calculatorState.leasingPeriod.label}
                        value={calculatorState.leasingPeriod.value}
                        minValue={calculatorState.leasingPeriod.minValue}
                        maxValue={calculatorState.leasingPeriod.maxValue}
                        inputName={calculatorState.leasingPeriod.name}
                        unitMeasurement={calculatorState.leasingPeriod.unitMeasurement}
                        onChange={handleChange}/>
                </DataEntrySection>
                <ResultSection>
                    <article>4534534</article>
                    <article>4534534</article>
                    <button>Оформить</button>
                </ResultSection>
            </MainWrapper>
        </AppWrapper>
    );
}

export default App;
