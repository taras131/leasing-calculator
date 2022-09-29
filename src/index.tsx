import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/app";
import {Global} from "./styles";
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Global/>
        <App/>
    </React.StrictMode>
);

reportWebVitals();
