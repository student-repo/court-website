import {combineReducers} from 'redux';
import NewsReducer from './reducer-news';
import ResizeWindowReducer from './reducer-window-width'
import { routerReducer } from 'react-router-redux'

const allReducers = combineReducers({
    news: NewsReducer,
    windowWidth: ResizeWindowReducer,
    routing: routerReducer
});

export default allReducers
