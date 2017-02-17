import React from 'react';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from '../reducers/index';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import TabsExampleIconText from './example-tab'
import io from 'socket.io-client';
import _ from 'underscore'


const logger = createLogger();

var socket = io.connect('http://localhost:3200/');

const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

const News = () => {
    socket.on('INITIAL_DATA', function(data){
        if(_.isUndefined(data.data)){
            console.log("data undefined")
        }
        else{
            console.log(data.data)
        }
    });
    return(
    <div>
        <h3>News</h3>
    </div>
)}

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

const App = ({children}) => {
    return (
    <div>
        <TabsExampleIconText socket={socket}/>
        {children}
    </div>
)}

const enhancedHistory = syncHistoryWithStore(browserHistory, store);


const PageApp = () => (
    <Provider store={store}>
        <Router history={enhancedHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={News}/>
                <Route path="/news" component={News}/>
                <Route path="/reservation" component={Reservation}/>
                <Route path="/tennis-school" component={TennisSchool}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/prices" component={Prices}/>
            </Route>
        </Router>
    </Provider>
);

export default PageApp;