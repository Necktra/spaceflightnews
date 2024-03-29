import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore
} from 'redux';
import thunk from 'redux-thunk';
import news from './news/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    news: news,
});

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)));