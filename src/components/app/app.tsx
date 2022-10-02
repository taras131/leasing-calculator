import React from 'react';
import {AppWrapper} from "./styles";
import InputsSection from "../inputs-section";
import ResultsSection from "../results-section";

const App = () => {
    return (
        <AppWrapper>
            <main>
                <h1>
                    Рассчитайте стоимость
                    <br/>
                    автомобиля в лизинг
                </h1>
                <InputsSection/>
                <ResultsSection/>
            </main>
        </AppWrapper>
    );
}

export default App;
