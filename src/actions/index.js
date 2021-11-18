import axios from 'axios';
import { FETCH_SHOES } from './types';

export const fetchShoes = (count) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:5001/shoes/random?count=${count}`);
        console.log(response);
        dispatch({ type: FETCH_SHOES, payload: response.data});
    };
} 