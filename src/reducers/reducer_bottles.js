import { FETCH_BOTTLES } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_BOTTLES:
        // console.log(action.payload.data); // [bottle1, bottle2]
        // { 1: bottle }
            return _.mapKeys(action.payload.data, 'id'); //grab the data by the id
        default:
        return state;
    }
}