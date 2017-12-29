import { combineReducers } from 'redux'
import { CHANGE_CURRENT_ACCOUNT } from '../Constants/actionTypes';
import { data } from './mockData'
function dashBoardReducers(state = {currrentAccount: 0 ,data:data}, action) {
    switch(action.type){
        case CHANGE_CURRENT_ACCOUNT :
            return Object.assign({}, state, {
                currrentAccount: action.index,
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    dashBoardReducers
})

export default rootReducer