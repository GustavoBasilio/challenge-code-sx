import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
require('font-awesome-webpack');
require('./style/app.scss');

render(<App/> , document.getElementById('app'));