import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Global from './Components/StyledComponents/GlobalReset.js';

ReactDOM.render(
    <Router>
        <Global />
        <App />
    </Router>,
    document.getElementById('root')
);
