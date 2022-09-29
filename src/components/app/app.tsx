import React from 'react';
import InputFieldWrapper from "../input-field-with-slider";
import {AppWrapper, MainWrapper, Header, DataEntrySection, ResultSection} from "./styles";

const App = () => {
    const handleChange = (e: any) => {

    }
    return (
        <AppWrapper>
            <MainWrapper>
                <Header>Рассчитайте стоимость автомобиля в лизинг</Header>
                <DataEntrySection>
                    <InputFieldWrapper
                        label={"Стоимость автомобиля"}
                        value={3300000}
                        inputName={"costCar"}
                        unitMeasurement={"₽"}
                        onChange={handleChange}/>
                    <InputFieldWrapper
                        label={"Первоначальный взнос"}
                        value={42000}
                        inputName={"downPayment"}
                        unitMeasurement={"13%"}
                        onChange={handleChange}/>
                    <InputFieldWrapper
                        label={"Срок лизинга"}
                        value={60}
                        inputName={"leasingPeriod"}
                        unitMeasurement={"мес."}
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
