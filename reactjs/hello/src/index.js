import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import HelloWorld from './HelloWorld'
import PropsValidation from './PropsValidation'

ReactDOM.render(
    //<HelloWorld txt = 'Hello World from Component Reactjs by School of net'/>,
    <PropsValidation name="Agnaldo" age="26" height="1.55" />,
    document.getElementById("root")
)
//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
