import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'babel-core/register';
import 'babel-polyfill';
/* eslint-disable */
import App from './components/App.jsx';
import styles from '../scss/style.scss';

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
/* eslint-enable */
