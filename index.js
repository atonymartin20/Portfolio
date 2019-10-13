import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, composeEnhancers(middleware));

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <h3>Under Construction 3</h3>
        </Router>
    </Provider>

),document.getElementById('root');
// <html lang="en">
//     <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta name="description" content="">
//     <meta name="keywords" content="Keywords">
//     <meta name="author" content="Prof">
//     <link rel="stylesheet" type="text/css" href="css/index.css">
//     <link rel="shortcut icon" type="image/x-icon" href="./assets/favicon.ico" />
//     <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">

//     <title>Portfolio</title>
//     <!-- scripts -->
//     </head>

//     <body>
//         <div class="container">
//             <header>
//                 <nav>
//                     <a href=""></a>
//                 </nav>
//                 <p>hamburger</p>
//             </header>
//             Under Construction 2
//             Myrtle Beach Pelicans selects 3B - Jonathan India.

//             Great Lakes in on the clock.
//         </div>
//     </body>

// </html>