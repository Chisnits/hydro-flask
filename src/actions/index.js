import _ from 'lodash'
import axios from 'axios';

export const FETCH_BOTTLES = 'fetch_bottles';

const ROOT_URL = 'http://localhost:3001';

export function fetchBottles(){
    const request = axios(`${ROOT_URL}/allbottles`);

    return {
        type: FETCH_BOTTLES,
        payload: request

};
}