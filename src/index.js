import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from './redux/store'
import * as serviceWorker from './serviceWorker';
import './assets/css/tailwind.css'
import 'font-awesome/css/font-awesome.min.css';


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
