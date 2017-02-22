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
import MenuImageGallery from './menu-image-gallery'
import {Col, Row} from "pui-react-grids";
import TennisSchool from './tennis-school'
import Contact from './contact'


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

// const TennisSchool = () => (
//     <div>
//         <h3>Tennis School</h3>
//     </div>
// )

const Gallery = () => (
    <div>
        <h3>Gallery</h3>
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
            <MenuImageGallery/>
            <News socket={socket}/>
            <TennisSchool socket={socket}/>
            <Gallery/>
            <Prices/>
            <Contact center={{lat: 52.736635, lng: 15.267718}} zoom={13}/>
            <Row style={{backgroundColor: '#4d4d4d'}}>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </Row>
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