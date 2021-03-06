import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux' 
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-lazy-load-image-component/src/effects/blur.css'
import './_based.scss';
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />    
        </Router>
    
    </Provider>
 , document.getElementById('root'))