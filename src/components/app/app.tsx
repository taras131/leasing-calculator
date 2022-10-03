import React from 'react';
import {AppWrapper} from "./styles";
import InputsSection from "../inputs-section";
import ResultsSection from "../results-section";

const App = () => {
    return (
        <AppWrapper>
            <main>
                <div className="header_container">
                    <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
                </div>
                <InputsSection/>
                <ResultsSection/>
            </main>
        </AppWrapper>
    );
}

export default App;
