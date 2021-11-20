import axios from 'axios';
import { FETCH_SHOES_RANDOM, FETCH_SHOES_QUERY } from './types';

export const fetchShoes = (count) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:5001/shoes/random?count=${count}`);
        console.log(response);
        dispatch({ type: FETCH_SHOES_RANDOM, payload: response.data});
    };
} 

export const search = (query) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:5001/shoes/search?query=${query}`);
        console.log(response);
        dispatch({ type: FETCH_SHOES_QUERY, payload: response.data});
    };
} 