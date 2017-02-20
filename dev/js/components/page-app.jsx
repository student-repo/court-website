import React from 'react';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from '../reducers/index';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, IndexLink, browserHistory } from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import io from 'socket.io-client';
import _ from 'underscore'
import App from './app';
import News from './news'
import App1 from './test'
import {Col, Row} from "pui-react-grids";


const logger = createLogger();

var socket = io.connect('http://localhost:3200/');

const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

const Reservation = () => (
    <div>
        <h3>Reservation</h3>
    </div>
)

const TennisSchool = () => (
    <div>
        <h3>Tennis School</h3>
    </div>
)

const Gallery = () => (
    <div>
        <h3>Gallery</h3>
    </div>
)

const Contact = () => (
    <div>
        <h3>Contact</h3>
    </div>
)

const Prices = () => (
    <div>
        <h3>Prices</h3>
    </div>
)


// <ReactResizeDetector handleWidth handleHeight onResize={() => console.log("@@@@")} />
const AppWithProps = () => {
    return (
        <App socket={socket}>
            <App1/>
            <News socket={socket}/>
            <TennisSchool/>
            <Gallery/>
            <Prices/>
            <Contact/>
        </App>
    )
};

const NewsWithProps = () => {
    return (
        <News socket={socket}/>
    )
};

const enhancedHistory = syncHistoryWithStore(browserHistory, store);

const PageApp = () => (
    <Provider store={store}>
        <Router history={enhancedHistory}>
            <Route path="/" component={AppWithProps}/>
            <Route path="/reservation" component={Reservation}/>
        </Router>
    </Provider>
);

export default PageApp;