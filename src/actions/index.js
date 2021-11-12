import axios from 'axios';
import { FETCH_SHOE } from './types';

export const fetchShoe = () => {
    return function(dispatch) {
        axios.get('https://v2.jokeapi.dev/joke/Programming?type=twopart').then((res) => {
            dispatch({ type: FETCH_SHOE, shoe: res.data});
        });
    }
};