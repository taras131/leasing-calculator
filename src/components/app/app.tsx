import React from "react";
import InputsSection from "../inputs-section";
import ResultsSection from "../results-section";
import {AppWrapper} from "./styles";
import {CALCULATOR_HEADER} from "../../utils/const";
import Button from "../button";

const App = () => {
    return (
        <AppWrapper>
            <main>
                <div className="header_container">
                    <h1>{CALCULATOR_HEADER}</h1>
                </div>
                <InputsSection/>
                <ResultsSection/>
                <section className="demonstration_section">
                    <Button text="Disabled" handleClick={() => {
                        alert("try click disabled button");
                    }} isDisable/>
                </section>
            </main>
        </AppWrapper>
    );
};

export default App;
