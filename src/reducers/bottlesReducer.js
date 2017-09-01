import { combineReducers } from 'redux';
import BottlesReducer from './reducer_bottles'

const rootReducer = combineReducers({
    bottles: BottlesReducer
});

export default rootReducer;