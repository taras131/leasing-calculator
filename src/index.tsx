import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import {Global, theme} from "./styles/global";
import reportWebVitals from "./reportWebVitals";
import {setupStore} from "./store/store";
import {Provider} from "react-redux";
import {ThemeProvider} from "styled-components";
import "./index.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={setupStore()}>
            <ThemeProvider theme={theme}>
                <Global/>
                <App/>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
