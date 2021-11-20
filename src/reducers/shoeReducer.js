import { FETCH_SHOES_RANDOM, FETCH_SHOES_QUERY} from '../actions/types';

export default function shoeReducer(state = [], action) {
    switch(action.type) {
        case FETCH_SHOES_RANDOM:
            console.log(action.payload);
            return action.payload;
        case FETCH_SHOES_QUERY:
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}