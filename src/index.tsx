import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ThemeProvider } from 'emotion-theming';

import App from './App';
import mainTheme from './common/mainTheme';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ThemeProvider theme={mainTheme}>
        <App />
    </ThemeProvider>
    ,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
