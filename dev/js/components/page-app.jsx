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
import ImageGallery from 'react-image-gallery'
import App1 from './test'
// import * as sss from '../../scss/div-style.css'
// import * as sss1 from '../../../src/react-image.png'



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

var divStyle = {
    backgroundImage: 'url(react-image.png)',
    top: '0px',
    position: 'fixed',
    zIndex: '100',
    width: '100%'
};
var divStyle2 = {
//     height: '249px',
// width: '50px',
// position: 'fixed',
// left: '0px',
// top: '200px',
// zIndex: '100'
};


const AppWithProps = () => {
    return (
        <App socket={socket}>
            <App1/>
            <News socket={socket}/>
            <div style={divStyle}>
                <div style={divStyle2}>
                <p>ala ma kota ala ma kota ala ma kotaala ma kota ala ma kota ala ma kota ala ma kotaala</p>
                    </div>
                <br/>
                ala ma kota ala ma kota ala ma kotaala ma kota ala ma kota ala ma kota ala ma kotaala
            </div>
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