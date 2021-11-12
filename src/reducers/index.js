import { combineReducers } from "redux";
import shoeReducer from './shoeReducer';

export default combineReducers({
    shoe: shoeReducer
});