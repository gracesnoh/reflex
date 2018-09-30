import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {ThemeProvider, injectGlobal} from "styled-components";

injectGlobal`
    body {
        margin: 0;
    }
`;

const theme = {
    // Colors
    darkGray: "#565656",
    lightGray: "#EEEEEE",
    
    purple: "#4552E3",
    fontStack: "Inter UI','Helvetica', sans-serif",
    monospace: "Inconsolata', monospace",
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>, 
    document.getElementById('root'));
registerServiceWorker();
