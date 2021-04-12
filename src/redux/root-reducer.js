import { combineReducers } from 'redux';

import incrementReducer from './increment/increment.reducer';

export default combineReducers({
    increment: incrementReducer
});
