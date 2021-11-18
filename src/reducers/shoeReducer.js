import { FETCH_SHOES } from '../actions/types';

export default function shoeReducer(state = [], action) {
    switch(action.type) {
        case FETCH_SHOES:
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}