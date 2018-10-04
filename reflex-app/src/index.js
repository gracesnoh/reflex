import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { ThemeProvider, injectGlobal } from "styled-components";

const theme = {
    // Colors
    colors: {
      darkGray : "#4F4F4F",
      lightGray : "#EEEEEE",

      purple : "#7567F7",
      purple25 : "rgba(117,103,247,.25)",

      pink : "#FF52EE",
      red : "#EE4444",
      green : "#66BB66",
      white : "#FFFFFF",
    },

    // Fonts
    fonts: {
      fontStack : "'Inter UI','Helvetica', sans-serif",
      monospace : "Inconsolata', monospace",
    }

}

injectGlobal`
    @import url('https://rsms.me/inter/inter-ui.css');
    @import url("https://fonts.googleapis.com/css?family=Inconsolata:400,700");

    * {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: ${theme.fonts.fontStack};
      font-weight: 400;
      color:  ${theme.colors.darkGray};
      font-size: 14px;
      line-height: 1.2;
    }

    a {
      text-decoration: none;
      color: ${theme.colors.darkGray};
    }

    h1, h2, h3, h4 {
      margin: 0;
    }
      
    h1 {
      font-size: 36px;
      font-weight: 700;
    }
    
    h2 {
      font-size: 24px;
      font-weight: 700;
    }
    
    
    h3 {
      font-size: 18px;
      font-weight: 400;
    }
    
    h4 {
      font-size: 14px;
      font-weight: 700;
    }

    ::selection {
      background: ${theme.colors.purple25};
    }

    ::-moz-selection {
      background: ${theme.colors.purple25};
    }
`;

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>, 
    document.getElementById('root'));
registerServiceWorker();
