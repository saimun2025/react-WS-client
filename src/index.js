import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Socket01 from './Socket_connection';
//import { runWithAdal } from 'react-adal';
//import { authContext } from './adalConfig';
import * as serviceWorker from './serviceWorker';
//runWithAdal(authContext, () => {
    ReactDOM.render(
        <div>
            <App/>
            <Socket01/>

        </div>
        ,document.body
        //,document.getElementById('root')

    );
//});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
