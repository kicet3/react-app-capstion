import {combineReducers} from 'redux';
import user from './user_reducer';

const rootReducer = combinReducers({
    user
})

export default rootReducer