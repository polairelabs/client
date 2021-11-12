import { FETCH_SHOE } from '../actions/types';

export default function shoeReducer(state = null, action) {
    switch(action.type) {
        case FETCH_SHOE:
            return action.shoe;
        default:
            return state;
    }
}