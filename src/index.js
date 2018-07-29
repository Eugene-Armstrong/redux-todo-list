import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import counter from './reducer/index'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux"
import AppContainer from './container/AppContainer';


const store = createStore(counter);
ReactDOM.render(
    <Provider store={store}>
<AppContainer />
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
