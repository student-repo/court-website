import {combineReducers} from 'redux';
import NewsReducer from './reducer-news';
import { routerReducer } from 'react-router-redux'

const allReducers = combineReducers({
    news: NewsReducer,
    routing: routerReducer
});

export default allReducers
