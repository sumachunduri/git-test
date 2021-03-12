import {createStore, combineReducers, applyMiddleware} from 'redux';
//import { Reducer, initialState } from './reducer'--before splitting reducers
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
       // reducer Reducer, 
      // our initialState  initialState, 
      combineReducers({
        dishes: Dishes,
        comments: Comments,
        promotions: Promotions,
        leaders: Leaders,   
        ...createForms({
            feedback: InitialFeedback
        })
    }),
    applyMiddleware(thunk, logger)
       
    );

    return store;
}
